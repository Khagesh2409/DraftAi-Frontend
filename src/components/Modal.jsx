import { React, useState } from 'react';
import '../App.css';
import logo from "../assets/LogoSvg.svg";

function Modal({ isOpen, onClose, email = '' }) {
  const [selectedOptionForPracticeArea, setSelectedOptionForPracticeArea] = useState('');
  const [selectedOptionForAnotherTool, setSelectedOptionForAnotherTool] = useState('');

  if (!isOpen) return null;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      email: event.target.email?.value.trim() || 'N/A',
      name: event.target.name?.value.trim() || 'N/A',
      phoneNumber: event.target.phoneNumber?.value.trim() || 'N/A',
      organisationName: event.target.organisationName?.value.trim() || 'N/A',
      practiceArea: selectedOptionForPracticeArea || event.target.otherPracticeArea?.value.trim() || 'N/A',
      anotherTool: selectedOptionForAnotherTool || 'N/A',
      nameOfTool: event.target.nameOfTool?.value.trim() || 'N/A'
    };    

    try {
      const response = await fetch('https://draftai-backend.onrender.com/save_wishlist', {
      // const response = await fetch('http://localhost:8000/save_wishlist', {
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

  const handleOptionChangeForPracticeArea = (event) => {
    const selectedOptionForPracticeArea = event.target.value;
    setSelectedOptionForPracticeArea(selectedOptionForPracticeArea);
    console.log('Selected option:', selectedOptionForPracticeArea);
  };

  const handleOptionChangeForAnotherTool = (event) => {
    const selectedOptionForAnotherTool = event.target.value;
    setSelectedOptionForAnotherTool(selectedOptionForAnotherTool);
    console.log('Selected option:', selectedOptionForAnotherTool);
  };

  return (
    <div className="modal">
      <div className="modal-content rounded-lg flex flex-col items-center pt-10 random bg-black overflow-y-scroll">
        <div className="flex items-center justify-center w-[100%] relative">
          <img src={logo} alt='DraftAi Logo' width="150px" height="150px" />
          <span className="close absolute right-5 bottom-4" onClick={onClose}>&times;</span>
        </div>
        <br /><br />
        <div className='flex flex-col items-center justify-center'>
          <p className='font-garet-book text-2xl text-white'>Become a <span className='font-hindGuntur-bold text-3xl'>Next-Gen</span> Professional</p>
          <p className="text-2xl font-garet-book text-white">Complete the form to join the wishlist and recieve a free trial.</p>
        </div>
        <br /><br />
        <form id="wishlistForm" onSubmit={handleSubmit} className='flex flex-col gap-10 font-garet-book'>
          <div className='flex flex-col gap-10 font-garet-book'>
            <div>
              <p className='text-lg font-garet-book text-white'>Enter your email here:</p>
              <input type="text" defaultValue={email} placeholder="Enter your work email here" name="email" className="border-2 border-white bg-black text-white text-lg rounded-md px-4 py-2 w-[30vw]" />
            </div>
            <div className='flex flex-col'>
              <p className='text-lg font-garet-book text-white'>Enter your name here:</p>
              <input type="text" placeholder="Enter your full-name here" name="name" className="border-2 border-white bg-black text-white text-lg rounded-md px-4 py-2 w-[30vw]" />
            </div>
          </div>
          <div className='flex flex-col gap-10 font-garet-book'>
            <div>
              <p className='text-lg font-garet-book text-white'>Enter your phone number here:</p>
              <input type="text" placeholder="Enter your phone number here" name="phoneNumber" className="border-2 border-white bg-black text-white text-lg rounded-md px-4 py-2  w-[30vw]" />
            </div>
            <div className='flex flex-col'>
              <p className='text-lg font-garet-book text-white'>Enter name of your organisation here:</p>
              <input type="text" placeholder="Enter name of your organisation here" name="organisationName" className="border-2 border-white bg-black text-white text-lg rounded-md px-4 py-2 w-[30vw]" />
            </div>
          </div>
          <div>
            <p className='text-lg font-garet-book text-white mb-2'>Select your practice area:</p>
            <div className="dropdown">
              <select value={selectedOptionForPracticeArea} onChange={handleOptionChangeForPracticeArea} className='bg-black text-white'>
                <option value="" className='text-white'>Select an option</option>
                <option value="Corp" className='text-white'>Corp</option>
                <option value="Litigation" className='text-white'>Litigation</option>
                <option value="In-House" className='text-white'>In-House</option>
                <option value="Other" className='text-white'>Other</option>
              </select>
            </div>
            {
              (selectedOptionForPracticeArea == "Other") && (
                <div className='mt-8'>
                  <p className='text-lg font-garet-book text-white'>Specify your Practice Area</p>
                  <input type="text" placeholder="Specify your Practice Area Here" name="otherPracticeArea" className="border-2 border-white bg-black text-white text-lg rounded-md px-4 py-2 w-[30vw]" />
                </div>
              )
            }
          </div>
          <div>
            <p className='text-lg font-garet-book text-white mb-2'>Have you used any other AI drafting tool?</p>
            <div className='dropdown'>
              <select value={selectedOptionForAnotherTool} onChange={handleOptionChangeForAnotherTool} className='bg-black text-white'>
                <option value="" className='text-white'>Select an option</option>
                <option value="Yes" className='text-white'>Yes</option>
                <option value="No" className='text-white'>No</option>
              </select>
            </div>
          </div>
          {
            selectedOptionForAnotherTool == 'Yes' && (
              <div>
                <p className='text-lg font-garet-book text-white'>Which tool have you used?</p>
                <input type="text" placeholder="Enter the name of the tool here" name="nameOfTool" className="border-2 border-white bg-black text-white text-lg rounded-md px-4 py-2 w-[30vw]" />
              </div>
            )
          }
          <div className='flex items-center justify-center'>
            <button type='submit' className='text-black rounded-md text-lg h-10 bg-white px-10 hover:bg-custom-orange hover:text-white hoverEffectOnJoinWishlist hoverEffectOnWishlist'>JOIN WISHLIST</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
