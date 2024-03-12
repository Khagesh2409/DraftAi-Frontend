import { React, useState, useEffect } from 'react'
import uploadDocumentSvg from "../assets/UploadSVg.svg"
import plusSvg from "../assets/PlusSvg.svg"
import robotFaceSvg from "../assets/RobotFace.svg"
import documentSvg from "../assets/DocumentSvg.svg"
import arrowSvg from "../assets/ArrowSvg.svg"

function UserJourney() {
    const [isMobile, setIsMobile] = useState(false);

    const mlModelLocalSite = () => {
        window.open('http://localhost:8501/', '_blank');
    }

    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    const showScreenA = () => {
        document.querySelector('.screenA').style.right = '0';
    }

    const hideScreenA = () => {
        document.querySelector('.screenA').style.right = '-400px';
    }
    const showScreenB = () => {
        document.querySelector('.screenB').style.right = '0';
    }

    const hideScreenB = () => {
        document.querySelector('.screenB').style.right = '-400px';
    }
    const showScreenC = () => {
        document.querySelector('.screenC').style.right = '0';
    }

    const hideScreenC = () => {
        document.querySelector('.screenC').style.right = '-400px';
    }

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
                            <p className='font-garet-book text-xl text-center'>Upload template</p>
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
            <div className='pl-12 pr-12 pb-24 pt-24 bg-custom-offwhite'>
                <div className='flex items-center justify-center font-garet-book'>
                    <p className='sm:text-2xl lg:text-5xl'>Get Your Draft Ready In 3 Easy Steps</p>
                </div>
                <div className='lg:grid lg:grid-cols-5 lg:grid-rows-1 lg:p-10'>
                    <div className="flex flex-col items-center justify-center gap-6 p-6">
                        <p className='sm:text-2xl lg:text-3xl font-garet-book'>Step 1</p>
                        <div onMouseOver={showScreenA} onMouseOut={hideScreenA} className='flex flex-col container items-center justify-center border-2 border-dashed border-black p-6 gap-6 lg:w-[300px] h-[250px]'>
                            <img src={uploadDocumentSvg} alt='upload document svg' height="60px" width="60px" />
                            <p className='pb-4 font-garet-book text-2xl text-center'>Upload Template</p>
                            <div class="screenA flex items-center justify-center text-center">
                                <div class="content text-white text-xl font-garet-book">
                                    The template is the example document that you want to make.
                                </div>
                            </div>
                        </div>
                        {/* <p className='font-garet-book text-center'>The template is the example document that you want to make.</p> */}
                    </div>
                    <div className="flex flex-col items-center justify-center gap-8">
                        <img src={plusSvg} alt='plus svg' height="50px" width="50px" />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-6 ">
                        <p className='sm:text-2xl lg:text-3xl font-garet-book'>Step 2</p>
                        <div onMouseOver={showScreenB} onMouseOut={hideScreenB} className='flex flex-col items-center justify-center lg:w-[300px] border-2 container border-dashed border-black p-6 gap-6 h-[250px]'>
                            <img src={uploadDocumentSvg} alt='upload document svg' height="60px" width="60px" />
                            <p className='font-garet-book text-2xl'>Upload Case Notes</p>
                            <div class="screenB flex items-center justify-center text-center">
                                <div class="content text-white text-xl font-garet-book">
                                    Case notes are the files that have the relevant information of the new draft
                                </div>
                            </div>
                        </div>
                        {/* <p className='font-garet-book text-center'>Case notes are the files that have the relevant information of the new draft</p> */}
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        {/* <img src={robotFaceSvg} alt='robot face svg ' height="50px" width="50px" className='sm:h-[40px] sm:w-[40px] sm:mt-8' /> */}
                        <p className='text-3xl font-garet-book'>AI</p>
                        <img src={arrowSvg} alt='arrow svg' height="100px" width="100px" className='sm:mb-8' />
                    </div>
                    <div onMouseOver={showScreenC} onMouseOut={hideScreenC} className="flex flex-col items-center justify-center gap-6">
                        <p className='sm:text-2xl lg:text-3xl font-garet-book'>Step 3</p>
                        <div className='flex flex-col container items-center justify-center border-2 border-dashed border-black gap-6 h-[250px] lg:w-[300px]'>
                            <img src={documentSvg} alt='document svg' height="60px" width="60px" />
                            <p className='pb-4 font-garet-book text-2xl'>AI Generated Drafts</p>
                            <div class="screenC  flex items-center justify-center text-center">
                                <div class="content text-white text-xl font-garet-book">
                                    Get your custom made Draft within minutes
                                </div>
                            </div>
                        </div>
                        {/* <p className='font-garet-book text-center'>Get your custom made Draft within minutes</p> */}
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <button onClick={mlModelLocalSite} className='font-garet-book border-2 px-6 w-[150px] sm:py-2 lg:py-4 text-white sm:text-lg lg:text-lg bg-custom-blue-light hover:bg-opacity-50 hover:text-black'>Try Now</button>
                </div>
            </div>
        )
    )

}

export default UserJourney