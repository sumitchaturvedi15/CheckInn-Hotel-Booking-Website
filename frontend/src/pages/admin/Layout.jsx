import React from 'react'
import AdminNavbar from '../../components/admin/AdminNavbar'
import Siderbar from '../../components/admin/Siderbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col h-screen'>
        <AdminNavbar/>
        <div className='flex h-full'>
            <Siderbar/>
            <div className='flex-1 p-4 pt-10 md:px-10 h-full'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Layout