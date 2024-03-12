import React, { useState } from 'react'

function CostingPlan() {
    const [annualBillingStatus, setAnnualBillingStatus] = useState(false);
    const [monthlyBillingStatus, setMonthlyBillingStatus] = useState(true);

    const annualBilling = () => {
        setMonthlyBillingStatus(false);
        setAnnualBillingStatus(true);
    }

    const monthyBilling = () => {
        setAnnualBillingStatus(false);
        setMonthlyBillingStatus(true);
    }

    return (
        <div className='flex gap-8 p-10'>
            <div class="p-6 shadow-md w-[300px] bg-custom-blue-dark rounded-lg pricing">
                <h2 class="text-2xl font-bold mb-4 text-white">Basic</h2>
                <p class="text-xl flex font-semibold text-white gap-3">
                    <span className='text-5xl'>Free</span>
                    <p className='flex flex-col text-sm justify-center'>
                        <span>per user</span>
                        <span>per month</span>
                    </p>
                </p>
                <br />
                <p class="mb-4 text-white text-sm">Ideal for occasional users who need a few drafts per month.</p>
                <button type='button' class="bg-custom-blue-light text-white py-2 px-20 rounded hover:bg-blue-600 inline-block mr-2 mb-4 mt-4">Get started</button>
                {/* <button type='button' class="bg-white text-black py-2 px-20 rounded hover:bg-blue-600 inline-block mr-2">Get started</button> */}
                {/* <a href="Get started" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 inline-block mr-2">Get started</a> */}
                {/* <a href="Chat to sales" class="text-blue-500 hover:underline inline-block">Chat to sales</a> */}
                <h3 class="text-xl text-white font-bold mt-2 mb-2">FEATURES</h3>
                {/* <p class="text-white mb-2 text-sm pb-4">Everything in Basic plus..</p> */}
                <ul class="text-gray-600 list-disc list-inside">
                    <li className='text-white text-sm pb-2'>Access to basic features  </li>
                    <li className='text-white text-sm pb-2'>1 device per user </li>
                    <li className='text-white text-sm pb-2'>5 Drafts/Month</li>
                    <li className='text-white text-sm pb-2'>Basic chat and email support  </li>
                </ul>
            </div>

            {
                annualBillingStatus ? (
                    <div class="p-6 shadow-md w-[300px] bg-custom-blue-dark rounded-lg pricing">
                        <div className='flex justify-between'>
                            <h2 className="text-2xl font-bold mb-4 text-white">Plus</h2>
                            <div className='bg-green-400 rounded-lg h-fit p-2'>
                                <p className='text-sm font-bold text-black'>Popular</p>
                            </div>
                        </div>
                        <p className="text-xl flex font-semibold text-white gap-3">
                            <span className='text-5xl line-through'>₹24,000</span>
                            <p className='flex flex-col text-sm justify-center'>
                                <span>per user</span>
                                <span>per year</span>
                            </p>
                        </p><br/>
                        <p className="text-xl flex font-semibold text-white gap-3">
                            <span className='text-5xl'>₹18,000</span>
                            <p className='flex flex-col text-sm justify-center'>
                                <span>per user</span>
                                <span>per year</span>
                            </p>
                        </p>
                        <div className='flex gap-2 mt-8'>
                            <button type='button' className="py-2 px-2 text-white rounded-md bg-custom-blue-light text-sm" onClick={monthyBilling}>Monthly Billing</button><br />
                            <button type='button' className="py-2 px-2 text-white rounded-md bg-custom-blue-light text-sm" onClick={annualBilling}>Annual Billing</button>
                        </div>
                        <br />
                        <p class="mb-4 text-white text-sm">Perfect for professionals and frequent users requiring unlimited access.</p>
                        <button type='button' class="bg-custom-blue-light text-white py-2 px-20 rounded hover:bg-blue-600 inline-block mr-2 mb-4 mt-4">Get started</button>
                        {/* <button type='button' class="bg-white text-black py-2 px-20 rounded hover:bg-blue-600 inline-block mr-2">Get started</button> */}
                        {/* <a href="Get started" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 inline-block mr-2">Get started</a> */}
                        {/* <a href="Chat to sales" class="text-blue-500 hover:underline inline-block">Chat to sales</a> */}
                        <h3 class="text-xl text-white font-bold mt-2 mb-2">FEATURES</h3>
                        {/* <p class="text-white mb-2 text-sm pb-4">Everything in Basic plus..</p> */}
                        <ul class="text-gray-600 list-disc list-inside">
                            <li className='text-white text-sm pb-2'>Access to plus features </li>
                            <li className='text-white text-sm pb-2'>2 devices per user </li>
                            <li className='text-white text-sm pb-2'>Unlimited Drafts/Month</li>
                            <li className='text-white text-sm pb-2'>Priority chat and email support </li>
                        </ul>
                        <p className="text-white text-sm mt-12">Unlock the full potential of DraftAi with unlimited drafts for your legal needs.</p>
                    </div>
                ) : (

                    <div class="p-6 shadow-md w-[300px] bg-custom-blue-dark rounded-lg pricing">
                        <div className='flex justify-between'>
                            <h2 className="text-2xl font-bold mb-4 text-white">Plus</h2>
                            <div className='bg-green-400 rounded-lg h-fit p-2'>
                                <p className='text-sm font-bold text-black'>Popular</p>
                            </div>
                        </div>
                        <p className="text-xl flex font-semibold text-white gap-3">
                            <span className='text-5xl'>₹1,999</span>
                            <p className='flex flex-col text-sm justify-center'>
                                <span>per user</span>
                                <span>per month</span>
                            </p>
                        </p>
                        <div className='flex gap-2 mt-8'>
                            <button type='button' className="py-2 px-2 text-white rounded-md bg-custom-blue-light text-sm" onClick={monthyBilling}>Monthly Billing</button><br />
                            <button type='button' className="py-2 px-2 text-white rounded-md bg-custom-blue-light text-sm" onClick={annualBilling}>Annual Billing</button>
                        </div>
                        <br />
                        <p class="mb-4 text-white text-sm">Perfect for professionals and frequent users requiring unlimited access.</p>
                        <button type='button' class="bg-custom-blue-light text-white py-2 px-20 rounded hover:bg-blue-600 inline-block mr-2 mb-4 mt-4">Get started</button>
                        {/* <button type='button' class="bg-white text-black py-2 px-20 rounded hover:bg-blue-600 inline-block mr-2">Get started</button> */}
                        {/* <a href="Get started" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 inline-block mr-2">Get started</a> */}
                        {/* <a href="Chat to sales" class="text-blue-500 hover:underline inline-block">Chat to sales</a> */}
                        <h3 class="text-xl text-white font-bold mt-2 mb-2">FEATURES</h3>
                        {/* <p class="text-white mb-2 text-sm pb-4">Everything in Basic plus..</p> */}
                        <ul class="text-gray-600 list-disc list-inside">
                            <li className='text-white text-sm pb-2'>Access to plus features </li>
                            <li className='text-white text-sm pb-2'>2 device per user </li>
                            <li className='text-white text-sm pb-2'>Unlimited Drafts/Month</li>
                            <li className='text-white text-sm pb-2'>Priority chat and email support </li>
                        </ul>
                        <p className="text-white text-sm mt-12">Unlock the full potential of DraftAi with unlimited drafts for your legal needs.</p>
                    </div>
                )

            }

            <div class="p-6 shadow-md w-[300px] bg-custom-blue-dark rounded-lg pricing">
                <h2 class="text-2xl font-bold mb-4 text-white">Enterprise</h2>
                <p class="text-xl flex font-semibold text-white gap-3">
                    <p className='mt-12'></p>
                    {/* <span className='text-5xl'>₹1999</span>
                    <p className='flex flex-col text-sm justify-center'>
                        <span>per user</span>
                        <span>per month</span>
                    </p> */}
                </p>
                <br />
                <p class="mb-4 text-white text-sm">Tailored for businesses, firms, and teams needing collaborative drafting solutions.</p>
                <button type='button' class="bg-custom-blue-light text-white py-2 px-2 w-[100%] rounded hover:bg-blue-600 inline-block mr-2 mb-4 mt-4">Talk To Sales</button>
                {/* <button type='button' class="bg-white text-black py-2 px-20 rounded hover:bg-blue-600 inline-block mr-2">Get started</button> */}
                {/* <a href="Get started" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 inline-block mr-2">Get started</a> */}
                {/* <a href="Chat to sales" class="text-blue-500 hover:underline inline-block">Chat to sales</a> */}
                <h3 class="text-xl text-white font-bold mt-2 mb-2">FEATURES</h3>
                {/* <p class="text-white mb-2 text-sm pb-4">Everything in Basic plus..</p> */}
                <ul class="text-gray-600 list-disc list-inside">

                    <li className='text-white text-sm pb-2'>Access to plus features </li>
                    <li className='text-white text-sm pb-2'>Enterprise-level security  </li>
                    <li className='text-white text-sm pb-2'>Collaborative drafting
                    </li>


                    <li className='text-white text-sm pb-2'>Priority chat and email support </li>


                </ul>
                <p className="text-white text-sm mt-12">Contact us for a custom quote and empower your team with efficient legal drafting.</p>
            </div>
        </div>
    )
}

export default CostingPlan