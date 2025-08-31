import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks= async (req,res) => {
    try{
        const whook=new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        const headers={
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        };
        await whook.verify(JSON.stringify(req.body), headers);
        const {type, data}= req.body;
        const userData= {
            _id: data.id,
            email: data.email_addresses[0].email_address,
            usernName: data.first_name+" "+data.last_name,
            image: data.profile_image_url,
        }
        switch(type){
            case "user.created":{
                await User.create(userData);
                break;
            }
            case "user.updated":{
                await User.findByIdAndUpdate(data.id, userData);
                break;
            }
            case "user.deleted":{  
                await User.findByIdAndDelete(data.id);
                break;
            }
            default: break;
        }
        res.json({success: true, message: "Webhook received" });
    }catch(err){
        console.log(err.message);
        res.json({success: false, message: err.message});
    }
}

export default clerkWebhooks;