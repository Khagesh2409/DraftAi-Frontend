import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import '../App.css'
import logo from "../assets/LogoSvg.svg"
import GreenCirclesDesign from './GreenCirclesDesign'
import WhyChooseUs from './WhyChooseUs'
import Footer from './Footer'
import Modal from './Modal'
import UserJourney from './UserJourney'
import FAQ from './FAQ'
import UseCases from './UseCases'
import { Link } from 'react-router-dom'

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [email, setEmail] = useState("");

    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    useEffect(() => {
        if (screenWidth < 640) {
            setIsMobile(true);
        }
    }, [screenWidth])

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const mlModelLocalSite = () => {    
        window.open('http://localhost:8501/', '_blank');
    }

    const openModal = async (event) => {
        setIsModalOpen(true);
        if (email !== "") {
            const formData = {
                email: email,
                name: 'N/A',
                phoneNumber: 'N/A',
                organisationName: 'N/A',
                practiceArea: 'N/A',
                anotherTool: 'N/A',
                nameOfTool: 'N/A'
            };

            try {
                const response = await fetch('https://draftai-backend.onrender.com/save_wishlist', {
                    method: 'POST',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                if (response.ok) {
                    alert('Data saved successfully!');
                } else {
                    alert('Error saving data!');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error saving data!');
            }
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        isMobile ? (
            <div>
                <div className='overflow-x-hidden'>
                    <div>
                        <Navbar />
                        <div className='flex flex-col gap-16 sm:gap-16 lg:gap-24 items-center justify-center w-[100%] h-[80vh] weighingScaleDiv'>
                            <p className='text-white font-hindGuntur-light tracking-wide text-xl' id='headline'>AI-Powered Drafting</p>
                            <button type='button' className='font-garet-book text-custom-orange border-custom-orange py-4 border-4 px-8 sm:py-2 lg:py-6 tracking-widest rounded-md sm:text-lg lg:text-2xl bg-black bg-opacity-[70%] hover:bg-black' onClick={openModal}>JOIN THE WISHLIST</button>
                        </div>
                    </div>
                    <div className='flex items-center justify-center h-[300px] p-10'>
                        <p className='font-garet-book text-base sm:text-lg lg:text-3xl text-center leading-10'>Leveraging <b>Generative AI</b> for Efficient Drafting: Save time on mechanical drafting with DraftAi's precise and<br /> rapid document creation. </p>
                    </div>
                    <WhyChooseUs />
                    <UserJourney />
                    <div className='flex flex-col items-center justify-center w-full h-[300px] bg-black'>
                        <p className='font-hindGuntur-light text-lg sm:text-2xl lg:text-5xl text-white'>To Become a <span className=' font-hindGuntur-bold sm:text-5xl lg:text-7xl'>Next-Gen</span> Professional</p>
                        <div className='flex flex-col gap-10 items-center justify-center'>
                            <input type='text' value={email} onChange={handleEmailChange} placeholder='Enter your work email here' className='border-2 text-white border-white sm:text-lg lg:text-xl rounded-md px-4 py-2 mt-4 sm:w-[300px] lg:w-[600px] bg-black' />
                            <button type='button' className=' text-black rounded-md text-md h-10 px-10 bg-white hoverEffectOnWishlist hover:bg-custom-orange hover:text-black' onClick={openModal}>JOIN WISHLIST</button>
                        </div>
                    </div>
                    <br /><br />
                    <div className='flex items-center justify-center'>
                        <div className='flex flex-col gap-10 bg-black rounded-lg p-2 h-[300px] w-[80vw] sm:w-[80vw] lg:w-[60vw] items-center justify-center'>
                            <p className='font-hindGuntur-light tracking-wider text-white sm:text-lg lg:text-2xl text-center'><span className='font-hindGuntur-semiBold text-white sm:text-2xl lg:text-3xl'>AI</span> has disrupted<span className='font-hindGuntur-semiBold text-white sm:text-2xl lg:text-3xl'> 30,00,00,000+</span> Jobs <span className=' text-sm'>(As of 2023)</span><br />
                                Don't Let it affect yours, Use AI as a professional today!</p>
                            <div>
                                <button type='button' className=' text-black rounded-md sm:text-sm lg:text-lg h-10 bg-white px-10 hover:bg-custom-orange hover:text-white hoverEffectOnJoinWishlist hoverEffectOnWishlist' onClick={openModal}>JOIN WISHLIST</button>
                                <Modal isOpen={isModalOpen} onClose={closeModal} email={email} />
                            </div>
                        </div>
                    </div>
                    <br /><br />
                    <GreenCirclesDesign />
                    <div className='w-[100vw] h-[300px] bg-custom-green flex flex-col items-center justify-center'>
                        <p className='font-garet-book text-lg text-white sm:text-xl lg:text-4xl'>To know more, scroll through our</p>
                        <img src={logo} alt='logo' className='sm:w-[100px] w-[150px] h-[150px] sm:h-[100px] lg:w-[200px] lg:h-[200px]' />
                        <p className='font-garet-book text-lg text-white sm:text-xl lg:text-4xl'><a href='#' className='underline underline-offset-8'>Manifesto</a></p>
                    </div>
                    <br /><br />
                    <Footer />
                </div>
            </div>
        ) : (
            <div className='overflow-x-hidden'>
                <div className='weighingScaleDiv'>
                    <Navbar />
                    <div className='flex flex-col sm:gap-16 lg:gap-24 items-center justify-center w-[100%] h-[80vh] relative'>
                        <div className="lg:flex lg:flex-col lg:gap-10 absolute top-[30%] lg:left-16">
                            <p className='text-white sm:text-4xl font-garet-book w-[60vw] tracking-wide lg:text-5xl' id='headline'>AI-Powered Drafting</p>
                            <p className='text-white sm:text-4xl font-garet-book w-[60vw] tracking-wide lg:text-5xl' id='headline'>Starts Here</p>
                        </div>
                        {/* <button type='button' className='absolute top-16 left-16 font-garet-book text-custom-orange border-custom-orange border-4 px-8 sm:py-2 lg:py-6 tracking-widest rounded-md sm:text-lg lg:text-2xl bg-black bg-opacity-[70%] hover:bg-black' onClick={openModal}>JOIN THE WISHLIST</button> */}
                        <div className='flex gap-4 absolute left-16 top-[350px]'>
                            <button type='button' className='font-garet-book border-2 px-2 w-[150px] sm:py-2 lg:py-3 text-white sm:text-lg lg:text-lg bg-custom-grey hover:bg-white hover:text-black' onClick={openModal}>Wishlist</button>
                            <button type='button' className='font-garet-book border-2 px-2 w-[150px] sm:py-2 lg:py-3 text-white sm:text-lg lg:text-lg bg-opacity-[100%] hover:bg-black' onClick={mlModelLocalSite}>Try It Out</button>
                            <Modal isOpen={isModalOpen} onClose={closeModal} email={email} />
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center h-[300px]'>
                    <p className='font-garet-book sm:text-lg lg:text-3xl text-center leading-10'>Leveraging <b className='text-custom-blue-light font-hindGuntur-bold text-4xl'>Generative AI</b> for Efficient Drafting:<br />Save time on mechanical drafting with DraftAi's precise and<br /> rapid document creation. </p>
                </div>
                <WhyChooseUs />
                <UserJourney />
                <div className='flex flex-col items-center justify-center w-full p-10 bg-custom-blue-dark'>
                    <UseCases />
                    <p className='font-hindGuntur-light sm:text-2xl lg:text-5xl text-white'>To Become a <span className=' font-hindGuntur-bold sm:text-5xl lg:text-7xl'>Next-Gen</span> Professional</p>
                    <div className='flex gap-10 items-center justify-center pb-10'>
                        <input type='text' value={email} onChange={handleEmailChange} placeholder='Enter your work email here' className='border-2 text-white border-white sm:text-lg lg:text-xl rounded-md px-4 py-2 mt-4 sm:w-[300px] lg:w-[600px] bg-transparent' />
                        <button type='button' className='text-black rounded-md text-md h-10 px-10 mt-4 bg-white hoverEffectOnWishlist hover:bg-custom-orange hover:text-black' onClick={openModal}>JOIN WISHLIST</button>
                    </div>
                </div>
                <br /><br />
                {/* <div className='flex items-center justify-center'>
                    <div className='flex flex-col gap-10 bg-black rounded-lg h-[250px] sm:w-[80vw] lg:w-[60vw] items-center justify-center'>
                        <p className='font-hindGuntur-light tracking-wider text-white sm:text-lg lg:text-2xl text-center'><span className='font-hindGuntur-semiBold text-white sm:text-2xl lg:text-3xl'>AI</span> has disrupted<span className='font-hindGuntur-semiBold text-white sm:text-2xl lg:text-3xl'> 30,00,00,000+</span> Jobs <span className=' text-sm'>(As of 2023)</span><br />
                            Don't Let it affect yours, Use AI as a professional today!</p>
                        <div>
                            <button type='button' className=' text-black rounded-md sm:text-sm lg:text-lg h-10 bg-white px-10 hover:bg-custom-orange hover:text-white hoverEffectOnJoinWishlist hoverEffectOnWishlist' onClick={openModal}>JOIN WISHLIST</button>
                            <Modal isOpen={isModalOpen} onClose={closeModal} email={email} />
                        </div>
                    </div>
                </div> */}
                <div class="flex gap-2 items-center justify-center">
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
                {/* <GreenCirclesDesign /> */}
                <div className='w-full h-[200px] bg-custom-green flex gap-2 items-center justify-center'>
                    <p className='font-garet-book text-white sm:text-xl lg:text-4xl'>To know more, scroll through our</p>
                    <Link to="/"><img src={logo} alt='logo' className='sm:w-[100px] sm:h-[100px] lg:w-[200px] lg:h-[200px]' /></Link> 
                    <p className='font-garet-book text-white sm:text-xl lg:text-4xl'><a href='https://drive.google.com/file/d/1oerSw3KIsYhYMaSCvftrqRa3W6U3r5cv/view?usp=sharing' className='underline underline-offset-8'>Manifesto</a></p>
                </div>
                <FAQ />
                <Footer />
            </div>
        )
    )
}

export default Home