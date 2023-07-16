import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";


const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <div className=" w-full flex justify-center pt-[15px]">
      <div className=" w-10/12 flex justify-between items-center">
        <div>
          <Link to='/'>
            <h1 className="text-md md:text-xl font-bold ml-1">Welcome to Portfolio</h1>
          </Link>

        </div>
        <div className="hidden text-sm md:text-base md:font-medium sm:flex gap-5 text-gray-300 ">

          {navLinks.map((nav) => (
            <Link to={nav.id}><h3 className="hover:text-white">{nav.title}</h3></Link>
          ))}


        </div>

        <div className="sm:hidden">
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-10 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl flex-col `}
          >
            {navLinks.map((nav) => (
              <Link to={nav.id} className="text-gray-300 hover:text-white text-sm m-1">{nav.title}</Link>
            ))}
          </div>
        </div>

      </div>
    </div>

  )
}

export default Navbar