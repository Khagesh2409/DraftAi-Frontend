import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import '../App.css'
import logo from "../assets/Logo.png"
import WhyChooseUs from './WhyChooseUs'
import Footer from './Footer'
import Modal from './Modal'
import UserJourney from './UserJourney'

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const openModal = () => {
        setIsModalOpen(true);
        console.log(email)
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Navbar />
            <div className='flex flex-col gap-24 items-center justify-center lg:w-[100%] lg:h-[80vh] weighingScaleDiv'>
                <p className='text-white font-hindGuntur-light tracking-wide text-7xl' id='headline'>Effortless Drafting Starts Here...</p>
                <button type='button' className='font-garet-book text-custom-orange border-custom-orange border-4 px-8 py-6 tracking-widest rounded-md text-2xl bg-black bg-opacity-[70%] hover:bg-black' onClick={openModal}>JOIN THE WISHLIST</button>
            </div>
            <div className='flex items-center justify-center h-[300px]'>
                <p className='font-garet-book text-3xl text-center leading-10'>Leveraging Generative AI for Efficient Drafting:<br />Save time on mechanical drafting with DraftAi's precise and<br /> rapid document creation. </p>
            </div>
            <WhyChooseUs />
            <UserJourney />
            <div className='flex flex-col items-center justify-center w-full h-[300px] bg-black'>
                <p className='font-hindGuntur-light text-5xl text-white'>To Become a <span className=' font-hindGuntur-bold text-7xl'>Next-Gen</span> Professional</p>
                <div className='flex gap-10 items-center justify-center'>
                    <input type='text' value={email} onChange={handleEmailChange} placeholder='Enter your work email here' className='border-2 text-white border-white text-xl rounded-md px-4 py-2 mt-4 w-[600px] bg-black' />
                    <button type='button' className=' text-black rounded-md text-md h-10 px-10 mt-4 bg-white hoverEffectOnWishlist hover:bg-custom-orange hover:text-black' onClick={openModal}>JOIN WISHLIST</button>
                </div>
            </div>
            <br/><br/>
            <div className='flex items-center justify-center'>
                <div className='flex flex-col gap-10 bg-black rounded-lg h-[250px] w-[60vw] items-center justify-center'>
                    <p className='font-hindGuntur-light tracking-wider text-white text-2xl text-center'><span className='font-hindGuntur-semiBold text-white text-3xl'>AI</span> has disrupted<span className='font-hindGuntur-semiBold text-white text-3xl'> 30,00,00,000+</span> Jobs <span className=' text-sm'>(As of 2023)</span><br />
                        Don't Let it affect yours, Use AI as a professional today!</p>
                    <div>
                        <button type='button' className=' text-black rounded-md text-lg h-10 bg-white px-10 hover:bg-custom-orange hover:text-white hoverEffectOnJoinWishlist hoverEffectOnWishlist' onClick={openModal}>JOIN WISHLIST</button>
                        <Modal isOpen={isModalOpen} onClose={closeModal} email={email} />
                    </div>
                </div>
            </div>
            <br/><br/><br/>
            <div className='flex h-30 w-full gap-2 items-center justify-center'>
                <div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div>
                <div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div>
                <div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div><div class="flex flex-col-reverse gap-2 items-center justify-center">
                    <div class="w-[24px] h-[24px] bg-custom-green rounded-full"></div>
                    <div class="w-[20px] h-[20px] bg-custom-green rounded-full"></div>
                    <div class="w-[16px] h-[16px] bg-custom-green rounded-full"></div>
                    <div class="w-[12px] h-[12px] bg-custom-green rounded-full"></div>
                    <div class="w-[8px] h-[8px] bg-custom-green rounded-full"></div>
                    <div class="w-[4px] h-[4px] bg-custom-green rounded-full"></div>
                    <div class="w-[1px] h-[1px] bg-custom-green rounded-full"></div>
                </div>
            </div>
            <div className='w-full h-[200px] bg-custom-green flex gap-2 items-center justify-center'>
                <p className='font-garet-book text-white text-4xl'>To know more, scroll through our</p>
                <img src={logo} alt='logo' className='w-[200px] h-[200px]' />
                <p className='font-garet-book text-white text-4xl'><a href='#' className='underline underline-offset-8'>Manifesto</a></p>
            </div>
            <br /><br />
            <Footer />
        </div>
    )
}

export default Home