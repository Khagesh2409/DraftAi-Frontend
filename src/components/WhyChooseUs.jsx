import { React, useState, useEffect } from 'react'
import robotFace from '../assets/RobotFace.png'
import timeIcon from '../assets/TimeIcon.png'
import uploadFileIcon from '../assets/UploadFileIcon.png'
import tickIcon from '../assets/TickIcon.png'

function WhyChooseUs() {
    const [isMobile, setIsMobile] = useState(false);

    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    useEffect(() => {
        if (screenWidth < 640) {
            setIsMobile(true);
        }
    }, [screenWidth])
    return (
        isMobile ? (
            <div>
                <div className='sm:h-[600px] lg:h-[700px] bg-black w-full flex flex-col lg:gap-20 items-center justify-center p-4'>
                    <p className='font-garet-book text-2xl mt-10 sm:text-2xl sm:mb-8 lg:text-6xl text-white text-center'>Why Choose Us?</p>
                    <div className='sm:flex sm:flex-col sm:gap-8 lg:grid lg:grid-cols-2 lg:grid-rows-2 w-[80vw] gap-24'>
                        <div className='flex gap-8 items-center justify-center'>
                            <img src={robotFace} alt='Robot Face' className='h-12 w-16' />
                            <div>
                                <p className='text-white text-lg mt-8 font-hindGuntur-light sm:text-lg lg:text-3xl sm:mb-1 lg:mb-4'>AI-Powered Drafting</p>
                                <p className='text-white font-hindGuntur-light sm:text-sm lg:text-xl'>Utilise advanced AI algorithms to generate accurate drafts quickly.</p>
                            </div>
                        </div>
                        <div className='flex gap-8 items-center justify-center'>
                            <img src={timeIcon} alt='Time Icon' className='h-16 w-16' />
                            <div>
                                <p className='text-white font-hindGuntur-light mt-8 sm:text-lg text-lg lg:text-3xl sm:mb-1 lg:mb-4'>Time-Saving</p>
                                <p className='text-white font-hindGuntur-light sm:text-sm lg:text-xl'>Streamline your drafting process and save valuable time with automated drafting solutions.</p>
                            </div>
                        </div>
                        <div className='flex gap-8  items-center justify-center'>
                            <img src={uploadFileIcon} alt='Upload File Icon' className='h-16 w-16' />
                            <div>
                                <p className='text-white font-hindGuntur-light sm:text-lg mt-8 text-lg lg:text-3xl sm:mb-1 lg:mb-4'>Minimal Input</p>
                                <p className='text-white font-hindGuntur-light sm:text-sm lg:text-xl'>Provide case notes and templates, and let DraftAi handle the rest with minimal input required.</p>
                            </div>
                        </div>
                        <div className='flex gap-8 items-center justify-center mb-8'>
                            <img src={tickIcon} alt='Tick Icon' className='h-16 w-16' />
                            <div>
                                <p className='text-white font-hindGuntur-light sm:text-lg mt-8 text-lg lg:text-3xl sm:mb-1 lg:mb-4s'>Accuracy</p>
                                <p className='text-white font-hindGuntur-light sm:text-sm lg:text-xl'>Ensure accuracy in your drafts with the precision of AI technology.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className='sm:h-[600px] lg:h-[700px] bg-black w-full flex flex-col lg:gap-20 items-center justify-center'>
                <p className='font-garet-book sm:text-2xl sm:mb-8 lg:text-6xl text-white text-center'>Why Choose Us?</p>
                <div className='sm:flex sm:flex-col sm:gap-8 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:w-[60vw] lg:gap-24'>
                    <div className='flex gap-8 items-center justify-center'>
                        <img src={robotFace} alt='Robot Face' className='sm:h-12 sm:w-16 lg:h-16 lg:w-20' />
                        <div>
                            <p className='text-white font-hindGuntur-light sm:text-lg lg:text-3xl sm:mb-1 lg:mb-4'>AI-Powered Drafting</p>
                            <p className='text-white font-hindGuntur-light sm:text-sm lg:text-xl'>Utilise advanced AI algorithms to generate accurate drafts quickly.</p>
                        </div>
                    </div>
                    <div className='flex gap-8 items-center justify-center'>
                        <img src={timeIcon} alt='Time Icon' className='sm:h-16 sm:w-16 lg:h-20 lg:w-20' />
                        <div>
                            <p className='text-white font-hindGuntur-light sm:text-lg lg:text-3xl sm:mb-1 lg:mb-4'>Time-Saving</p>
                            <p className='text-white font-hindGuntur-light sm:text-sm lg:text-xl'>Streamline your drafting process and save valuable time with automated drafting solutions.</p>
                        </div>
                    </div>
                    <div className='flex gap-8  items-center justify-center'>
                        <img src={uploadFileIcon} alt='Upload File Icon' className='sm:h-16 sm:w-16 lg:h-20 lg:w-20' />
                        <div>
                            <p className='text-white font-hindGuntur-light sm:text-lg lg:text-3xl sm:mb-1 lg:mb-4'>Minimal Input</p>
                            <p className='text-white font-hindGuntur-light sm:text-sm lg:text-xl'>Provide case notes and templates, and let DraftAi handle the rest with minimal input required.</p>
                        </div>
                    </div>
                    <div className='flex gap-8 items-center justify-center'>
                        <img src={tickIcon} alt='Tick Icon' className='sm:h-16 sm:w-16 lg:h-20 lg:w-20' />
                        <div>
                            <p className='text-white font-hindGuntur-light sm:text-lg lg:text-3xl sm:mb-1 lg:mb-4s'>Accuracy</p>
                            <p className='text-white font-hindGuntur-light sm:text-sm lg:text-xl'>Ensure accuracy in your drafts with the precision of AI technology.</p>
                        </div>
                    </div>
                </div>
            </div>
        )

    )
}

export default WhyChooseUs