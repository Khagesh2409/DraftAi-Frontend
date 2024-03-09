import React from 'react';
import logo from "../assets/Logo.png";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex flex-shrink relative items-center justify-center w-full h-28 bg-black'>
      <NavLink exact to='/' className='flex absolute left-10 items-center justify-center w-48 h-fit' activeClassName='active-link'><img src={logo} alt='DraftAi Logo' className='h-48 w-48' /></NavLink>
      <div className='flex flex-shrink absolute gap-20'>
        <NavLink exact to='/' className='text-white font-hindGuntur-regular text-xl cursor-pointer hover:text-custom-grey' activeClassName='active-link'>Home</NavLink>
        <NavLink to='/about' className='text-white font-hindGuntur-regular text-xl cursor-pointer hover:text-custom-grey' activeClassName='active-link'>About</NavLink>
        <NavLink to='/services' className='text-white font-hindGuntur-regular text-xl cursor-pointer hover:text-custom-grey' activeClassName='active-link'>Services</NavLink>
        <NavLink to='/contact' className='text-white font-hindGuntur-regular text-xl cursor-pointer hover:text-custom-grey' activeClassName='active-link'>Contact</NavLink>
      </div>
      <button type='button' className='flex absolute bg-custom-grey border-custom-orange border-4 px-8 py-2 right-20 font-garet-book text-white text-xl bg-opacity-50 hover:bg-black'>WISHLIST</button>
    </div>
  );
}

export default Navbar;
