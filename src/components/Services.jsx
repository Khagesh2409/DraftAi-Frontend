import React from 'react'
import Navbar from './Navbar'
import CostingPlan from './CostingPlan'

function Services() {
  return (
    <div className='general'>
      <div>
        <Navbar />
        <div className='flex items-center justify-center mt-4'>
          <p className='text-white text-7xl font-hindGuntur-regular text-center'>We've got a plan<br />that's perfect for you</p>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <CostingPlan />
      </div>
    </div>
  )
}

export default Services