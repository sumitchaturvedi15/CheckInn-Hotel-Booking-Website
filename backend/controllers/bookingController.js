import transporter from "../configs/nodemailer.js";
import Booking from "../models/Bookings.js"
import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

const checkAvailability = async({room, checkInDate, checkOutDate}) =>{
    try{
        const bookings=await Booking.find({
            room,
            checkInDate: {$lte: checkOutDate},
            checkOutDate: {$gte: checkInDate},
        })
        const isAvailable= bookings.length===0;
        return isAvailable;
    }
    catch(err){
        console.log(err.message);
    }
}

export const checkAvailabilityAPI=async(req,res)=>{
    try{
        const {room, checkInDate, checkOutDate}=req.body;
        const isAvailable=await checkAvailability({room, checkInDate, checkOutDate});
        res.json({success:true, isAvailable});
    }
    catch(err){
        res.json({success:false, message: err.message});
    }
}

export const createBooking = async (req, res) => {
  try {
    const { room, hotel, checkInDate, checkOutDate, guests } = req.body;
    const user = req.user._id;

    const isAvailable = await checkAvailability({ room, checkInDate, checkOutDate });
    if (!isAvailable)
      return res.json({ success: false, message: "Room not available for the selected dates" });

    const roomData = await Room.findById(room).populate("hotel");

    const checkIN = new Date(checkInDate);
    const checkOUT = new Date(checkOutDate);

    const timeDiff = checkOUT.getTime() - checkIN.getTime();
    const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));

    const totalPrice = roomData.pricePerNight * nights;

    const booking = await Booking.create({
      user,
      room,
      hotel: roomData.hotel._id,
      guests: +guests,
      checkInDate,
      checkOutDate,
      totalPrice,
    });

    const mailOptions = {
        from: process.env.SENDER_EMAIL,
        to: req.user.email,
        subject: "Booking Confirmation",
        html: `
            <h2>Your Booking Details</h2>
            <p>Dear ${req.user.username}, </p>
            <p>Thank you for your booking. Here are your booking details:</p>
            <ul>
                <li><strong>Booking ID:</strong> ${booking._id}</li>
                <li><strong>Hotel:</strong> ${roomData.hotel.name}</li>
                <li><strong>Location:</strong> ${roomData.hotel.address}</li>
                <li><strong>Date:</strong> ${booking.checkInDate.toDateString()}</li>
                <li><strong>Booking Amount:</strong> ${process.env.CURRENCY || '$'} ${booking.totalPrice} / night</li>
            </ul>  

            <p>We look forward to hosting you!</p>
            <p>If you have any questions, feel free to contact us.</p>
            <p>Best Regards,<br/>Hotel Booking Team</p>
        `
    }

    await transporter.sendMail(mailOptions)

    res.json({ success: true, message: "Booking created successfully" });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};


export const getUserBookings=async(req,res)=>{
    try{
        const user=req.user._id;
        const bookings=await Booking.find({user}).populate("hotel room").sort({createdAt:-1});
        res.json({success:true, bookings});
    }catch(err){
        res.json({success:false, message: err.message});
    }
}

export const getHotelBookings=async(req,res)=>{
    try{
        const hotel=await Hotel.findOne({admin: req.auth.userId});
        if(!hotel) return res.json({success:false, message: "Hotel not registered"});
        const bookings=await Booking.find({hotel: hotel._id}).populate("user room hotel").sort({createdAt:-1});
        const totalBookings=bookings.length;
        const totalRevenue=bookings.reduce((total, booking)=> total+booking.totalPrice, 0);
        res.json({success:true, dashboardData:{totalBookings, totalRevenue}, bookings});
    }catch(err){
        res.json({success:false, message: err.message});
    }
}