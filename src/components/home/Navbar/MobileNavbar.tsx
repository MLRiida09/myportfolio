import React from 'react'
import { Navlinks } from '../../../../assets/assets'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'


type props ={
  showNav : boolean ;
  closeNav :()=> void ; 
}

function MobileNavbar({closeNav,showNav}:props) {

    const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]"

  return (
    <div className="lg:hidden">
      <div
        className={`fixed inset-0 ${navOpen} transform transition-all right-0 duration-500 
        z-[100002] bg-black opacity-70 w-full h-screen`}
      >
        <div
          className={`"text-white ${navOpen} fixed justify-center flex flex-col h-full 
          transform-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-black 
          space-y-6 z-[100050] right-0`}
        >
          {Navlinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}>
              <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          ))}
            <CgClose
            onClick={closeNav}
            className=' text-white absolute top-[0.7rem] right-[1.4rem] sm:h-8 w-6 h-6 ' 
            />
        </div>
      </div>
     
    </div>
  )
}

export default MobileNavbar
