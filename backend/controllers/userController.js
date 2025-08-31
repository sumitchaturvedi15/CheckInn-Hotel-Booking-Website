export const getUserData=async (req,res)=>{
    try{
        const role=req.user.role;
        const recentSearchCities=req.user.recentSearchCities;
        res.json({success:true,role,recentSearchCities});
    }
    catch(err){
        res.json({success:false ,message: err.message});
    }
}

export const storeSearchCity=async(req,res)=>{
    try{
        const {recentSearchCities}=req.body;
        const user=await req.user;
        if(user.recentSearchCities.lenght<3){
            user.recentSearchCities.push(recentSearchCities);
        }
        else{
            user.recentSearchCities.shift();
            user.recentSearchCities.push(recentSearchCities);
        }
        await user.save();
        res.json({success:true, message: "City added to recent searches"});
    }
    catch(err){
        res.json({success:false ,message: err.message});
    }
}