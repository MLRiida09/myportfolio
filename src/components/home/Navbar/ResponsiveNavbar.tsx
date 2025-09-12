"use client"
import React, { useState } from 'react'
import  Nav  from './Nav'
import MobileNavbar from './MobileNavbar'

const ResponsiveNavbar = () => {

  const [showNav , setShowNav] = useState(false);

  const openNavHander = () => setShowNav(true); 
  const closeNavHnader =() => setShowNav(false);

  return (
    <div>
      <Nav openNav={openNavHander} />
      <MobileNavbar  showNav={showNav} closeNav={closeNavHnader} />
    </div>
  )
}

export default ResponsiveNavbar
