import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const MyBookings = () => {
  const { axios, getToken, user } = useAppContext();
  const [bookings, setBookings] = useState([]);

  const fetchUserBookings = async () => {
    try {
      const { data } = await axios.get("/api/bookings/user", {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      });
      if (data.success) {
        setBookings(data.bookings);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handlePayment = async (bookingId) => {
    try{
      const {data} = await axios.post("/api/bookings/stripe-payment",{bookingId},
        {headers:{Authorization: `Bearer ${await getToken()}`}}
      )
      if(data.success){
        window.location.href = data.url
      }else{
        toast.error(data.message)
      }
    }
    catch(error){
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (user) {
      fetchUserBookings();
    }
  }, [user]);



  return (
    <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
      <Title
        title="My Bookings"
        subTitle="Below are all your confirmed and past bookings with us. You can view the details of each reservation, including dates, room type, and status, for your convenience."
        align="left"
      />
      <div className="max-w-6xl mt-8 w-full text-gray-800">
        <div
          className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300
        font-medium text-base py-3"
        >
          <div>Hotels</div>
          <div>Date & Timings</div>
          <div>Payment</div>
        </div>
        
        {bookings.map((booking) => {
          const imageUrl = Array.isArray(booking?.room?.images[0])
            ? booking?.room?.images[0][0]
            : booking?.room?.images[0];

          return (
            <div
              key={booking._id}
              className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] 
              w-full border-b border-gray-300 py-6 first:border-t"
            >
              <div className="flex flex-col md:flex-row">
                <img
                  src={imageUrl || assets.placeholderImage} 
                  alt="hotel-img"
                  className="md:w-44 rounded shadow object-cover"
                />
                <div className="flex flex-col gap-1.5 max-md:mt-3 md:ml-4">
                  <p className="font-playfair text-2xl">{booking?.hotel?.name}</p>
                  <span className="font-inter text-sm">
                    ({booking?.room?.roomType})
                  </span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <img src={assets.locationIcon} alt="location-icon" />
                    <span>{booking?.hotel?.address}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <img src={assets.guestsIcon} alt="guests-icon" />
                    <span>Guests: {booking.guests}</span>
                  </div>
                  <p className="text-base">Total: ${booking.totalPrice}</p>
                </div>
              </div>
              <div className="flex flex-row md:items-center md:gap-12 mt-3 gap-8">
                <div>
                  <p>Check-In:</p>
                  <p className="text-gray-500 text-sm">
                    {new Date(booking.checkInDate).toDateString()}
                  </p>
                </div>
                <div>
                  <p>Check-Out:</p>
                  <p className="text-gray-500 text-sm">
                    {new Date(booking.checkOutDate).toDateString()}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center pt-3">
                <div className="flex items-center gap-2">
                  <div
                    className={`h-3 w-3 rounded-full ${
                      booking.isPaid ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                  <p
                    className={`text-sm ${
                      booking.isPaid ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {booking.isPaid ? "Paid" : "Unpaid"}
                  </p>
                </div>
                <div>
                  {!booking.isPaid && (
                    <button
                    onClick={()=> handlePayment(booking._id)}
                      className="px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full
                          hover:bg-gray-50 transition-all cursor-pointer"
                    >
                      Pay Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyBookings;