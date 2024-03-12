import React from 'react'
import "../App.css"
import courtDocuments from "../assets/CourtDocuments.png"
import businessContracts from "../assets/BusinessContracts.png"
import personalDocuments from "../assets/PersonalDocuments.png"
import humanResources from "../assets/HumanResources.png"
import realEstate from "../assets/RealEstate.png"
import reportGeneration from "../assets/ReportGeneration.png"

function UseCases() {
    const showScreen1 = () => {
        document.querySelector('.screen1').style.right = '0';
    }

    const hideScreen1 = () => {
        document.querySelector('.screen1').style.right = '-400px';
    }
    const showScreen2 = () => {
        document.querySelector('.screen2').style.right = '0';
    }

    const hideScreen2 = () => {
        document.querySelector('.screen2').style.right = '-400px';
    }
    const showScreen3 = () => {
        document.querySelector('.screen3').style.right = '0';
    }

    const hideScreen3 = () => {
        document.querySelector('.screen3').style.right = '-400px';
    }
    const showScreen4 = () => {
        document.querySelector('.screen4').style.right = '0';
    }

    const hideScreen4 = () => {
        document.querySelector('.screen4').style.right = '-400px';
    }
    const showScreen5 = () => {
        document.querySelector('.screen5').style.right = '0';
    }

    const hideScreen5 = () => {
        document.querySelector('.screen5').style.right = '-400px';
    }
    const showScreen6 = () => {
        document.querySelector('.screen6').style.right = '0';
    }

    const hideScreen6 = () => {
        document.querySelector('.screen6').style.right = '-400px';
    }
    return (
        <div className='p-10 mb-10'>
            <div className='flex items-center justify-center'>
                <p className='text-7xl text-white font-garet-book mb-12'>Discover DraftAi In Action</p>
            </div>
            <div className='grid grid-rows-2 grid-cols-3 gap-14'>
                <div onMouseOver={showScreen1} onMouseOut={hideScreen1} className='bg-white container p-5 text-2xl font-garet-book flex items-center justify-center rounded-lg h-[250px] w-[350px] flex-col gap-4'>
                    <img src={courtDocuments} alt='courtDocuments' className="h-20 w-20" />
                    <p className='text-3xl'>Court Documents</p>
                    <div class="screen1 flex items-center justify-center text-center">
                        <div class="content text-white text-xl">
                            Legal pleadings, motions, petitions, and other court-related documents.
                        </div>
                    </div>
                </div>
                <div onMouseOver={showScreen2} onMouseOut={hideScreen2} className='bg-white container p-5 text-2xl font-garet-book flex items-center justify-center rounded-lg h-[250px] w-[350px] flex-col gap-4' >
                    <img src={businessContracts} alt='businessContracts' className="h-20 w-20" />
                    <p className='text-3xl'>Business Contracts</p>
                    <div class="screen2  flex items-center justify-center text-center">
                        <div class="content text-white text-xl">
                            Business contracts, such as partnership agreements, service contracts, and vendor agreements.
                        </div>
                    </div>
                </div>
                <div onMouseOver={showScreen3} onMouseOut={hideScreen3} className='bg-white container p-5 text-2xl font-garet-book flex items-center justify-center rounded-lg h-[250px] w-[350px] flex-col gap-4' >
                    <img src={personalDocuments} alt='personalDocuments' className="h-20 w-20" />
                    <p className='text-3xl text-center'>Personal Documents</p>
                    <div class="screen3  flex items-center justify-center text-center">
                        <div class="content text-white text-xl">
                            Wills, power of attorney documents, and personal agreements.
                        </div>
                    </div>
                </div>
                <div onMouseOver={showScreen4} onMouseOut={hideScreen4} className='bg-white container p-5 text-2xl font-garet-book flex items-center justify-center rounded-lg h-[250px] w-[350px] flex-col gap-4'>
                    <img src={humanResources} alt='humanResources' className="h-20 w-20" />
                    <p className='text-3xl'>Human Resources</p>
                    <div class="screen4  flex items-center justify-center text-center">
                        <div class="content text-white text-xl">
                            Employment contracts, non-disclosure agreements (NDAs), and HR policies.
                        </div>
                    </div>
                </div>
                <div onMouseOver={showScreen5} onMouseOut={hideScreen5} className='bg-white container p-5 text-2xl font-garet-book flex items-center justify-center rounded-lg h-[250px] w-[350px] flex-col gap-4'>
                    <img src={realEstate} alt='realEstate' className="h-20 w-20" />
                    <p className='text-3xl text-center'>Real Estate Documents</p>
                    <div class="screen5 flex items-center justify-center text-center">
                        <div class="content text-xl text-white">
                            Lease agreements, property sale contracts, and rental agreements.
                        </div>
                    </div>
                </div>
                <div onMouseOver={showScreen6} onMouseOut={hideScreen6} className='bg-white container p-5 text-2xl font-garet-book flex items-center justify-center rounded-lg h-[250px] w-[350px] flex-col gap-4'>
                    <img src={reportGeneration} alt='reportGeneration' className="h-20 w-20" />
                    <p className='text-3xl'>Report Generation</p>
                    <div class="screen6  flex items-center justify-center text-center">
                        <div class="content text-white text-xl">
                            Reports for business summaries, project updates, and financial statements.                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseCases