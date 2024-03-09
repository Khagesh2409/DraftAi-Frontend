import { React, useState, useEffect } from 'react'
import logo from '../assets/LogoSvg.svg'
import twitterLogo from '../assets/TwitterLogo.png'
import linkedinLogo from '../assets/LinkedinLogo.png'
import facebookLogo from '../assets/FacebookLogo.png'
import instagramLogo from '../assets/InstagramLogo.png'

function Footer() {
    const [isMobile, setIsMobile] = useState(false);

    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    useEffect(() => {
        if (screenWidth < 640) {
            setIsMobile(true);
        }
    }, [screenWidth])

    return (
        isMobile ? (
            <div className='bg-black w-full sm:h-fit lg:h-[300px] lg:flex gap-20 justify-center'>
                <div className='flex flex-col text-center lg:flex-col items-center justify-center sm:w-[100%] lg:w-[400px]'>
                    <img src={logo} alt='DraftAi Logo' className='h-[100px] w-[100px]' />
                    <p className='text-white text-lg font-hindGuntur-light mb-4'>We are proudly an Indian organization and would love to have the support of our country.</p>
                </div>
                <div className='flex flex-col items-center justify-center mt-12 gap-1 sm:gap-2 sm:ml-8'>
                    <p className='text-white font-hindGuntur-medium text-xl'>Get in touch</p>
                    <p className='text-white font-hindGuntur-light text-xl'><a href='#'>teamdraftai@gmail.com</a></p>
                    <p className='text-white font-hindGuntur-light text-xl'>+91 981 108 8200</p>
                    <p className='text-white font-hindGuntur-light text-xl'><a href='#'>Contact Us</a></p>
                </div>
                <div className='flex flex-col items-center justify-center mt-12 gap-1 sm:gap-2 sm:ml-8 sm:mt-8'>
                    <p className='text-white font-hindGuntur-medium text-xl'>Who we are</p>
                    <p className='text-white font-hindGuntur-light text-xl cursor-pointer'>About</p>
                    <p className='text-white font-hindGuntur-light text-xl cursor-pointer'>Terms of Service</p>
                    <p className='text-white font-hindGuntur-light text-xl cursor-pointer'>Privacy Policy</p>
                </div>
                <div className='flex flex-col items-center justify-center mt-12 gap-1 pb-8 sm:gap-2 sm:ml-8 sm:mt-8'>
                    <p className='text-white font-hindGuntur-medium text-xl'>Follow us</p>
                    <div className='flex gap-4 sm:mb-8'>
                        <a href='https://twitter.com/draftai_in'><img src={twitterLogo} alt='Twitter Logo' className='h-8 w-8' /></a>
                        <a href='https://www.facebook.com/draftai.in'><img src={facebookLogo} alt='Facebook Logo' className='h-8 w-8' /></a>
                        <a href='https://www.linkedin.com/company/draftai'><img src={linkedinLogo} alt='Linkedin Logo' className='h-8 w-8' /></a>
                        <a href='https://www.instagram.com/draftai.in/'><img src={instagramLogo} alt='Instagram Logo' className='h-8 w-8' /></a>
                    </div>
                </div>
            </div>
        ) : (
            <div className='bg-black w-full sm:h-fit lg:h-[300px] lg:flex gap-20 justify-center'>
                <div className='flex lg:flex-col items-center justify-center ml-6 sm:w-[100%] lg:w-[400px]'>
                    <img src={logo} alt='DraftAi Logo' className='sm:h-[150px] sm:w-[150px] lg:h-[200px] lg:w-[200px]' />
                    <p className='text-white text-lg ml-4 font-hindGuntur-light mb-4'>We are proudly an Indian organization and would love to have the support of our country.</p>
                </div>
                <div className='bg-white w-0.5 mt-6 mb-6 items-end'></div>
                <div className='flex flex-col justify-center gap-4 sm:gap-2 sm:ml-8'>
                    <p className='text-white font-hindGuntur-medium text-xl'>Get in touch</p>
                    <p className='text-white font-hindGuntur-light text-xl'><a href='#'>teamdraftai@gmail.com</a></p>
                    <p className='text-white font-hindGuntur-light text-xl'>+91 981 108 8200</p>
                    <p className='text-white font-hindGuntur-light text-xl'><a href='#'>Contact Us</a></p>
                </div>
                <div className='flex flex-col justify-center gap-4 sm:gap-2 sm:ml-8 sm:mt-8'>
                    <p className='text-white font-hindGuntur-medium text-xl'>Who we are</p>
                    <p className='text-white font-hindGuntur-light text-xl cursor-pointer'>About</p>
                    <p className='text-white font-hindGuntur-light text-xl cursor-pointer'>Terms of Service</p>
                    <p className='text-white font-hindGuntur-light text-xl cursor-pointer'>Privacy Policy</p>
                </div>
                <div className='flex flex-col justify-center gap-4 sm:gap-2 sm:ml-8 sm:mt-8'>
                    <p className='text-white font-hindGuntur-medium text-xl'>Follow us</p>
                    <div className='flex gap-4 sm:mb-8'>
                        <a href='https://twitter.com/draftai_in'><img src={twitterLogo} alt='Twitter Logo' className='h-8 w-8' /></a>
                        <a href='https://www.facebook.com/draftai.in'><img src={facebookLogo} alt='Facebook Logo' className='h-8 w-8' /></a>
                        <a href='https://www.linkedin.com/company/draftai'><img src={linkedinLogo} alt='Linkedin Logo' className='h-8 w-8' /></a>
                        <a href='https://www.instagram.com/draftai.in/'><img src={instagramLogo} alt='Instagram Logo' className='h-8 w-8' /></a>
                    </div>
                </div>
            </div>
        )
    )
}

export default Footer