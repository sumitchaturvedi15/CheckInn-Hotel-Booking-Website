import Hotel from "../models/Hotel.js";
import User from "../models/User.js";

export const registerHotel=async(req,res)=>{
    try{
        const {name, address, contact, city}=req.body;
        const admin=req.user._id;
        const hotel=await Hotel.findOne({admin});
        if(hotel){
            return res.json({success:false, message: "Hotel already registered"});
        }
        await Hotel.create({name, admin, address, contact, city});
        await User.findByIdAndUpdate(admin, {role: "admin"});
        res.json({success:true, message: "Hotel registered successfully"});
    }
    catch(err){
        res.json({success:false ,message: err.message});
    }
}