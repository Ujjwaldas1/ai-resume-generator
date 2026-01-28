import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Root() {
    return (
      <div className="min-h-screen bg-black text-white">
  <Navbar />
  <div className="pt-20">   {/* Space for fixed Navbar (about 80px) */}
    <Outlet />
  </div>
</div>


    )
}

export default Root