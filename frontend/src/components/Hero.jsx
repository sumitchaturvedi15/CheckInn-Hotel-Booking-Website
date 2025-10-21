import React, { useState } from "react";
import { assets, cities } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
const Hero = () => {
  const {navigate, getToken, axios, setSearchCities} = useAppContext();
  const [destination, setDestination] = useState("");
  const onSearch = async (e)=>{
    e.preventDefault();
    navigate(`/rooms?destination=${destination}`);
    await axios.post('/api/user/storeSearchCity', {recentSearchCities : destination},{
      headers: { Authorization: `Bearer ${await getToken()}` }
    });
    setSearchCities((prevSearchedCities=[])=>{
      const updatedCities = [...prevSearchedCities, destination];
      if(updatedCities.length >3){
        updatedCities.shift();
      }
      return updatedCities;
    })
  }
  return (
    <div className='flex flex-col items-end justify-normal px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen'>
      <p className="bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-50 drop-shadow-[1px_1px_0px_black]">
        The Ultimate Hotel Experience
      </p>
      <h1 className="font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4 drop-shadow-[1px_1px_1px_black]">
        Your Next Stay is Just a Click Away.
      </h1>
      <p className="max-w-130 mt-2 text-sm md:text-base drop-shadow-[1px_1px_1px_black]">
        Don’t wait until the last minute. Secure your dream stay today and enjoy
        peace of mind knowing your trip is already taken care of.
      </p>

      <form onSubmit={onSearch} className="bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto drop-shadow-[2px_2px_2px_black]">
        <div>
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="" className="h-4"/>
            <label htmlFor="destinationInput">Destination</label>
          </div>
          <input
            onChange={e=> setDestination(e.target.value)}
            value={destination}
            list="destinations"
            id="destinationInput"
            type="text"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            placeholder="Type here"
            required
          />
          <datalist id="destinations">
            {cities.map((city,index)=>(
                <option value={city} key={index}/>
            ))}
          </datalist>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="" className="h-4"/>
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input
            id="checkIn"
            type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="" className="h-4"/>
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input
            id="checkOut"
            type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
          <label htmlFor="guests">Guests</label>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16"
            placeholder="0"
          />
        </div>

        <button className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1">
          <img src={assets.searchIcon} alt="searchIcon" className="h-7"/>
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default Hero;
