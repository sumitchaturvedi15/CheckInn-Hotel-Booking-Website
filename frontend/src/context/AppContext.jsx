import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

import {useNavigate} from "react-router-dom";
import {useUser, useAuth} from "@clerk/clerk-react";
import { toast } from "react-hot-toast";
axios.defaults.baseURL=import.meta.env.VITE_BACKEND_URL;
const AppContext = createContext();
export const AppProvider=({children})=>{
    const currency=import.meta.env.VITE_CURRENCY || "$";
    const navigate=useNavigate();
    const {user}=useUser();
    const {getToken}=useAuth();

    const [isAdmin, setIsAdmin]=useState(false);
    const [showHotelReg, setShowHotelReg]=useState(false);
    const [searchCities, setSearchCities]=useState([]);

    const fetchUser=async()=>{
        try{
            const {data}=await axios.get('/api/user',{headers:{Authorization:`Bearer ${await getToken()}`}});
            if(data.success){
                setIsAdmin(data.role==="admin");
                setSearchCities(data.recentSearchedCities);
            }
            else{
                setTimeout(()=>{
                    fetchUser();
                },5000)
            }
        }catch(err){
            toast.error(err.message);
        }
    }
    useEffect(()=>{
        if(user){
            fetchUser();
        }
    },[user])
    const value={
        currency, navigate, user, getToken, isAdmin, setIsAdmin, axios, showHotelReg, setShowHotelReg, searchCities, setSearchCities,
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext=()=>useContext(AppContext);