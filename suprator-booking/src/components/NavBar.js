import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {

    let Links =[
        {name: "Home",link:"/"},
        {name: "Services",link:"/Services"},
        {name: "About",link:"/about"},
        {name: "Contact",link:"/Contact"},
    ];
    const [open,setOpen] = useState(false);
  return (
    <div className='shadow-md w-full  top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7 '>
            <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-indigo-800 '>
                <span className='text-3xl text-indigo-800 mr-1 pt-2'>
                <ion-icon name="ticket-outline"></ion-icon>
                </span>
                Supratours
            </div>

            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
                {
                    Links.map((link)=>(
                        <li key={link.name} className='md:ml-8 text-base md:my-0 my-7 font-medium font-[Poppins]'>
                            <Link to={link.link} className='text-indigo-800 hover:text-indigo-300 duration-500' >{link.name}</Link>
                        </li>
                    ))
                 }

                <Link to='/LogIn' className='md:flex items-center bg-gradient-to-r from-blue-400 to-blue-700 hover:to-blue-800 text-white font-[Poppins] py-1 px-4 rounded-full md:ml-8 hover:bg-indigo-400 duration-500'>
                    <span className='text-xl text-white mr-1 pt-1'>
                        <ion-icon name="globe"></ion-icon>
                    </span>
                    Join us
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default NavBar
