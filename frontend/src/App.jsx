import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes,useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';
import MyBookings from './pages/MyBookings';
import HotelRegistration from './components/HotelRegistration';
import Layout from './pages/admin/Layout';
import Dashboard from './pages/admin/Dashboard';
import AddRoom from './pages/admin/AddRoom';
import ListRoom from './pages/admin/ListRoom';

const App = () => {
  const hotelAdmin= useLocation().pathname.includes("admin");
  return (
    <div>
      {!hotelAdmin && <Navbar/>}
      {false && <HotelRegistration/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rooms' element={<Rooms/>}/>
          <Route path='/rooms/:id' element={<RoomDetails/>}/>
          <Route path='/my-bookings' element={<MyBookings/>}/>
          <Route path='/admin' element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='add-room' element={<AddRoom/>}/>
          <Route path='list-room' element={<ListRoom/>}/>
          </Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App;