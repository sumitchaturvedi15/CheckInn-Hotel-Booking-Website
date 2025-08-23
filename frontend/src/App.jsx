import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes,useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';

const App = () => {
  const hotelAdmin= useLocation().pathname.includes("hotel-admin");
  return (
    <div>
      {!hotelAdmin && <Navbar/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rooms' element={<Rooms/>}/>
          <Route path='/rooms/:id' element={<RoomDetails/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App;