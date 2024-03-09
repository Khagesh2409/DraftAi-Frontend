import { React, useState, useEffect } from 'react'
import uploadDocumentSvg from "../assets/UploadSVg.svg"
import plusSvg from "../assets/PlusSvg.svg"
import robotFaceSvg from "../assets/RobotFace.svg"
import documentSvg from "../assets/DocumentSvg.svg"
import arrowSvg from "../assets/ArrowSvg.svg"

function UserJourney() {
    const [isMobile, setIsMobile] = useState(false);

    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    useEffect(() => {
        if (screenWidth < 640) {
            setIsMobile(true);
        }
    }, [screenWidth])

    return (
        isMobile ? (
            <div className='mt-14 pr-6 pl-6 mb-10'>
                <div className='flex items-center justify-center text-center font-garet-book'>
                    <p className='sm:text-2xl lg:text-5xl text-xl'>Get Your Draft Ready In 3 Easy Steps</p>
                </div>
                <div className='lg:grid lg:grid-cols-5 lg:grid-rows-1 lg:p-10'>
                    <div className="flex flex-col items-center justify-center gap-6 p-6">
                        <p className='sm:text-2xl lg:text-3xl text-xl font-garet-book'>Step 1</p>
                        <div className='flex flex-col items-center justify-center border-2 border-dashed border-black p-6 gap-6 w-[280px] h-[250px]'>
                            <img src={uploadDocumentSvg} alt='upload document svg' height="60px" width="60px" />
                            <p className='font-garet-book text-xl text-center'>Upload example document</p>
                        </div>
                        <p className='font-garet-book text-center'>The template is the example document that you want to make.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-8">
                        <img src={plusSvg} alt='plus svg' height="50px" width="50px" />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-6 ">
                        <p className='sm:text-2xl lg:text-3xl text-xl font-garet-book mt-12'>Step 2</p>
                        <div className='flex flex-col items-center justify-center border-2 border-dashed border-black p-6 gap-6 h-[250px]'>
                            <img src={uploadDocumentSvg} alt='upload document svg' height="60px" width="60px" />
                            <p className='pb-4 font-garet-book text-xl'>Upload case notes</p>
                        </div>
                        <p className='font-garet-book text-center'>Case notes are the files that have the relevant information of the new draft</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <img src={robotFaceSvg} alt='robot face svg ' height="50px" width="50px" className='sm:h-[40px] sm:w-[40px] mt-12' />
                        <img src={arrowSvg} alt='arrow svg' height="100px" width="100px" className='sm:mb-8' />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-6 ">
                        <p className='sm:text-2xl lg:text-3xl font-garet-book mt-12 text-xl'>Step 3</p>
                        <div className='flex flex-col items-center justify-center border-2 border-dashed border-black p-6 gap-6 h-[250px]'>
                            <img src={documentSvg} alt='document svg' height="60px" width="60px" />
                            <p className='pb-4 font-garet-book text-xl'>AI generated drafts</p>
                        </div>
                        <p className='font-garet-book text-center'>Get your custom made Draft within minutes</p>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <button className='text-black mt-12 rounded-md sm:mt-8 sm:text-lg lg:text-2xl h-10 bg-custom-orange px-10 hover:bg-custom-orange hover:text-white hoverEffectOnJoinWishlist hoverEffectOnWishlist'>Try It Now!</button>
                </div>
            </div>
        ) : (
            <div className='mt-14 p-12 mb-10'>
                <div className='flex items-center justify-center font-garet-book'>
                    <p className='sm:text-2xl lg:text-5xl'>Get Your Draft Ready In 3 Easy Steps</p>
                </div>
                <div className='lg:grid lg:grid-cols-5 lg:grid-rows-1 lg:p-10'>
                    <div className="flex flex-col items-center justify-center gap-6 p-6">
                        <p className='sm:text-2xl lg:text-3xl font-garet-book'>Step 1</p>
                        <div className='flex flex-col items-center justify-center border-2 border-dashed border-black p-6 gap-6 w-[280px] h-[250px]'>
                            <img src={uploadDocumentSvg} alt='upload document svg' height="60px" width="60px" />
                            <p className='pb-4 font-garet-book text-xl text-center'>Upload example document</p>
                        </div>
                        <p className='font-garet-book text-center'>The template is the example document that you want to make.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-8">
                        <img src={plusSvg} alt='plus svg' height="50px" width="50px" />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-6 ">
                        <p className='sm:text-2xl lg:text-3xl font-garet-book'>Step 2</p>
                        <div className='flex flex-col items-center justify-center border-2 border-dashed border-black p-6 gap-6 h-[250px]'>
                            <img src={uploadDocumentSvg} alt='upload document svg' height="60px" width="60px" />
                            <p className='pb-4 font-garet-book text-xl'>Upload case notes</p>
                        </div>
                        <p className='font-garet-book text-center'>Case notes are the files that have the relevant information of the new draft</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <img src={robotFaceSvg} alt='robot face svg ' height="50px" width="50px" className='sm:h-[40px] sm:w-[40px] sm:mt-8' />
                        <img src={arrowSvg} alt='arrow svg' height="100px" width="100px" className='sm:mb-8' />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-6 ">
                        <p className='sm:text-2xl lg:text-3xl font-garet-book'>Step 3</p>
                        <div className='flex flex-col items-center justify-center border-2 border-dashed border-black p-6 gap-6 h-[250px]'>
                            <img src={documentSvg} alt='document svg' height="60px" width="60px" />
                            <p className='pb-4 font-garet-book text-xl'>AI generated drafts</p>
                        </div>
                        <p className='font-garet-book text-center'>Get your custom made Draft within minutes</p>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <button className='text-black rounded-md sm:mt-8 sm:text-lg lg:text-2xl h-10 bg-custom-orange px-10 hover:bg-custom-orange hover:text-white hoverEffectOnJoinWishlist hoverEffectOnWishlist'>Try It Now!</button>
                </div>
            </div>
        )
    )

}

export default UserJourney