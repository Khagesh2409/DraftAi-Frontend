import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import '../App.css'
import logo from "../assets/LogoSvg.svg"
import WhyChooseUs from './WhyChooseUs'
import Footer from './Footer'
import Modal from './Modal'
import UserJourney from './UserJourney'
import GreenCircles from './GreenCirclesDesign'

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    useEffect(() => {
        if (screenWidth < 640) {
            setIsMobile(true);
        }
    }, [screenWidth])

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
        isMobile ? (
            <div>
                <div className='overflow-x-hidden'>
                    <Navbar />
                    <div className='flex flex-col gap-16 sm:gap-16 lg:gap-24 items-center justify-center w-[100%] h-[80vh] weighingScaleDiv'>
                        <p className='text-white font-hindGuntur-light tracking-wide text-xl' id='headline'>Effortless Drafting Starts Here...</p>
                        <button type='button' className='font-garet-book text-custom-orange border-custom-orange py-4 border-4 px-8 sm:py-2 lg:py-6 tracking-widest rounded-md sm:text-lg lg:text-2xl bg-black bg-opacity-[70%] hover:bg-black' onClick={openModal}>JOIN THE WISHLIST</button>
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
                    <br /><br /><br />
                    <GreenCircles />
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
                <Navbar />
                <div className='flex flex-col sm:gap-16 lg:gap-24 items-center justify-center w-[100%] h-[80vh] weighingScaleDiv'>
                    <p className='text-white sm:text-4xl font-hindGuntur-light tracking-wide lg:text-7xl' id='headline'>Effortless Drafting Starts Here...</p>
                    <button type='button' className='font-garet-book text-custom-orange border-custom-orange border-4 px-8 sm:py-2 lg:py-6 tracking-widest rounded-md sm:text-lg lg:text-2xl bg-black bg-opacity-[70%] hover:bg-black' onClick={openModal}>JOIN THE WISHLIST</button>
                </div>
                <div className='flex items-center justify-center h-[300px]'>
                    <p className='font-garet-book sm:text-lg lg:text-3xl text-center leading-10'>Leveraging <b>Generative AI</b> for Efficient Drafting:<br />Save time on mechanical drafting with DraftAi's precise and<br /> rapid document creation. </p>
                </div>
                <WhyChooseUs />
                <UserJourney />
                <div className='flex flex-col items-center justify-center w-full h-[300px] bg-black'>
                    <p className='font-hindGuntur-light sm:text-2xl lg:text-5xl text-white'>To Become a <span className=' font-hindGuntur-bold sm:text-5xl lg:text-7xl'>Next-Gen</span> Professional</p>
                    <div className='flex gap-10 items-center justify-center'>
                        <input type='text' value={email} onChange={handleEmailChange} placeholder='Enter your work email here' className='border-2 text-white border-white sm:text-lg lg:text-xl rounded-md px-4 py-2 mt-4 sm:w-[300px] lg:w-[600px] bg-black' />
                        <button type='button' className=' text-black rounded-md text-md h-10 px-10 mt-4 bg-white hoverEffectOnWishlist hover:bg-custom-orange hover:text-black' onClick={openModal}>JOIN WISHLIST</button>
                    </div>
                </div>
                <br /><br />
                <div className='flex items-center justify-center'>
                    <div className='flex flex-col gap-10 bg-black rounded-lg h-[250px] sm:w-[80vw] lg:w-[60vw] items-center justify-center'>
                        <p className='font-hindGuntur-light tracking-wider text-white sm:text-lg lg:text-2xl text-center'><span className='font-hindGuntur-semiBold text-white sm:text-2xl lg:text-3xl'>AI</span> has disrupted<span className='font-hindGuntur-semiBold text-white sm:text-2xl lg:text-3xl'> 30,00,00,000+</span> Jobs <span className=' text-sm'>(As of 2023)</span><br />
                            Don't Let it affect yours, Use AI as a professional today!</p>
                        <div>
                            <button type='button' className=' text-black rounded-md sm:text-sm lg:text-lg h-10 bg-white px-10 hover:bg-custom-orange hover:text-white hoverEffectOnJoinWishlist hoverEffectOnWishlist' onClick={openModal}>JOIN WISHLIST</button>
                            <Modal isOpen={isModalOpen} onClose={closeModal} email={email} />
                        </div>
                    </div>
                </div>
                <br /><br /><br />
                <GreenCircles />
                <div className='w-full h-[200px] bg-custom-green flex gap-2 items-center justify-center'>
                    <p className='font-garet-book text-white sm:text-xl lg:text-4xl'>To know more, scroll through our</p>
                    <img src={logo} alt='logo' className='sm:w-[100px] sm:h-[100px] lg:w-[200px] lg:h-[200px]' />
                    <p className='font-garet-book text-white sm:text-xl lg:text-4xl'><a href='#' className='underline underline-offset-8'>Manifesto</a></p>
                </div>
                <br /><br />
                <Footer />
            </div>
        )
    )
}

export default Home