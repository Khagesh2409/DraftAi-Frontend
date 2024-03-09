import React from 'react'
import robotFace from '../assets/RobotFace.png'
import timeIcon from '../assets/TimeIcon.png'
import uploadFileIcon from '../assets/UploadFileIcon.png'
import tickIcon from '../assets/TickIcon.png'

function WhyChooseUs() {
    return (
        <div className='h-[700px] bg-black w-full flex flex-col gap-20 items-center justify-center'>
            <p className='font-garet-book text-6xl text-white text-center'>Why Choose Us?</p>
            <div className='grid grid-cols-2 grid-rows-2 w-[60vw] gap-24'>
                <div className='flex gap-8 items-center justify-center'>
                    <img src={robotFace} alt='Robot Face' className='h-16 w-20' />
                    <div>
                        <p className='text-white font-hindGuntur-light text-3xl mb-4'>AI-Powered Drafting</p>
                        <p className='text-white font-hindGuntur-light text-xl'>Utilise advanced AI algorithms to generate accurate drafts quickly.</p>
                    </div>
                </div>
                <div className='flex gap-8 items-center justify-center'>
                    <img src={timeIcon} alt='Time Icon' className='h-20 w-20' />
                    <div>
                        <p className='text-white font-hindGuntur-light text-3xl mb-4'>Time-Saving</p>
                        <p className='text-white font-hindGuntur-light text-xl'>Streamline your drafting process and save valuable time with automated drafting solutions.</p>
                    </div>
                </div>
                <div className='flex gap-8  items-center justify-center'>
                    <img src={uploadFileIcon} alt='Upload File Icon' className='h-20 w-20' />
                    <div>
                        <p className='text-white font-hindGuntur-light text-3xl mb-4'>Minimal Input</p>
                        <p className='text-white font-hindGuntur-light text-xl'>Provide case notes and templates, and let DraftAi handle the rest with minimal input required.</p>
                    </div>
                </div>
                <div className='flex gap-8 items-center justify-center'>
                    <img src={tickIcon} alt='Tick Icon' className='h-20 w-20' />
                    <div>
                        <p className='text-white font-hindGuntur-light text-3xl mb-4'>Accuracy</p>
                        <p className='text-white font-hindGuntur-light text-xl'>Ensure accuracy in your drafts with the precision of AI technology.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs