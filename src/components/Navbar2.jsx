import { React, useState, useEffect } from 'react';
import logo from "../assets/LogoSvg.svg";
import { NavLink } from 'react-router-dom';
import '../App.css'
import Modal from './Modal';

function Navbar2() {
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
  useEffect(() => {
    if (screenWidth < 640) {
      setIsMobile(true);
    }
  }, [screenWidth])
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    isMobile ? (
      <div className='flex pr-4 items-center justify-end w-[100%] h-28' >
        <NavLink exact to='/' className='flex absolute left-4 sm:left-10 lg:left-10 items-center justify-center sm:h-[100px] sm:w-[100px] lg:h-60 lg:w-60' activeClassName='active-link'><img src={logo} alt='DraftAi Logo' className='h-24 w-24 sm:h-48 sm:w-48 lg:h-48 lg:w-48' /></NavLink>
        <div>
          <button className="burger-menu" onClick={toggleMenu}>
            <div className={isOpen ? "line line1-open" : "line"}></div>
            <div className={isOpen ? "line line2-open" : "line"}></div>
            <div className={isOpen ? "line line3-open" : "line"}></div>
          </button>
          {isOpen && (
            <ul className="menu">
              <li><NavLink exact to='/' className='text-white font-hindGuntur-regular sm:text-sm md:text-lg lg:text-xl cursor-pointer hover:text-custom-grey' activeClassName='active-link'>Home</NavLink></li>
              <li><NavLink to='/about' className='text-white font-hindGuntur-regular sm:text-sm md:text-lg lg:text-xl cursor-pointer hover:text-custom-grey' activeClassName='active-link'>About</NavLink></li>
              <li><NavLink to='/services' className='text-white font-hindGuntur-regular sm:text-sm md:text-lg lg:text-xl cursor-pointer hover:text-custom-grey' activeClassName='active-link'>Services</NavLink></li>
              <li><NavLink to='/contact' className='text-white font-hindGuntur-regular sm:text-sm md:text-lg lg:text-xl cursor-pointer hover:text-custom-grey' activeClassName='active-link'>Contact</NavLink></li>
            </ul>
          )}
        </div>
      </div>
    ) : (
      <div className='flex relative items-center justify-center w-[100%] h-28 bg-black' >
        <NavLink exact to='/' className='flex absolute left-4 sm:left-10 lg:left-10 items-center justify-center sm:h-[100px] sm:w-[100px] lg:h-60 lg:w-60' activeClassName='active-link'><img src={logo} alt='DraftAi Logo' className='h-24 w-24 sm:h-48 sm:w-48 lg:h-36 lg:w-36' /></NavLink>
        <div className='flex flex-shrink absolute sm:gap-8 lg:gap-20'>
          <NavLink exact to='/' className='text-white font-hindGuntur-regular sm:text-sm md:text-lg lg:text-xl cursor-pointer hover:text-custom-grey' activeClassName='active-link'>Home</NavLink>
          <NavLink to='/about' className='text-white font-hindGuntur-regular sm:text-sm md:text-lg lg:text-xl cursor-pointer hover:text-custom-grey' activeClassName='active-link'>About</NavLink>
          <NavLink to='/services' className='text-white font-hindGuntur-regular sm:text-sm md:text-lg lg:text-xl cursor-pointer hover:text-custom-grey' activeClassName='active-link'>Services</NavLink>
          <NavLink to='/contact' className='text-white font-hindGuntur-regular sm:text-sm md:text-lg lg:text-xl cursor-pointer hover:text-custom-grey' activeClassName='active-link'>Contact</NavLink>
        </div>
        <button type='button' className='absolute font-garet-book border-2 px-2 w-[150px] sm:py-2 lg:py-2 sm:right-4 lg:right-10 text-white sm:text-lg lg:text-lg bg-custom-grey hover:bg-white hover:text-black' onClick={openModal}>Wishlist</button>
        {/* <button type='button' className='flex absolute bg-custom-grey border-custom-orange border-4 px-8 py-2 sm:right-4 lg:right-10 font-garet-book text-white sm:text-sm md:text-lg lg:text-xl bg-opacity-50 hover:bg-black' onClick={openModal}>WISHLIST</button> */}
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    )
  );
}

export default Navbar2;
