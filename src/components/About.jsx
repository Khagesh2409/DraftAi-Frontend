import { React, useState, useEffect } from 'react'
import Navbar2 from './Navbar2'
import "../App.css"
import Footer from './Footer'
import Modal from './Modal';

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState("");

  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  useEffect(() => {
    if (screenWidth < 640) {
      setIsMobile(true);
    }
  }, [screenWidth]);

  const openModal = async (event) => {
    setIsModalOpen(true);
    if (email !== "") {
      const formData = {
        email: email,
        name: 'N/A',
        phoneNumber: 'N/A',
        organisationName: 'N/A',
        practiceArea: 'N/A',
        anotherTool: 'N/A',
        nameOfTool: 'N/A'
      };

      try {
        const response = await fetch('https://draftai-backend.onrender.com/save_wishlist', {
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
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  return (
    isMobile ? (
      <div>
        <Navbar />
        <div className='flex about h-[100vh] w-[100%] items-center justify-center text-center'>
          <p className='text-white font-garet-book text-5xl pt-24'>Our goal is to Democratise <br /><br />the Skill of Drafting</p>
        </div>
        <div className='flex about2 h-[100vh] w-[100%] items-center justify-between'>
          <div className='bg-black w-[50%] h-[80vh] right1 flex items-center justify-center p-12'>
            <p className='font-hindGuntur-regular text-white rotate-180 text-3xl tracking-widest leading-10'>
              At DraftAi, we're pioneering a new era of drafting by seamlessly merging the power of artificial intelligence with the expertise of legal professionals.<br />
              Our mission is simple yet transformative: to revolutionize the way legal documents are created, making the process faster, more efficient, and accessible to all.
            </p>
          </div>
          <p className='text-white font-garet-book text-8xl rotate-180 pl-10 pb-8'>Our Aim</p>
        </div>
        <div className='flex about3 h-[100vh] w-[100%] items-center justify-between'>
          <div className='bg-black w-[50%] h-[80vh] right1 flex items-center justify-center'>
            <p className='font-hindGuntur-regular text-white text-3xl tracking-widest leading-10 p-12'>Founded by a team of legal experts and AI enthusiasts, DraftAi was born out of a shared vision to democratize the skill of drafting for lawyers and consumers alike. We recognized the inherent challenges and time-consuming nature of traditional drafting methods, and we set out to develop an innovative solution that would streamline and automate the process.</p>
          </div>
          <p className='text-white font-garet-book text-8xl pr-10'>Our Story</p>
        </div>
        <div className='flex about3 h-[100vh] w-[100%] items-center justify-between rotate-180'>
          <div className='bg-black w-[50%] h-[80vh] right1 flex items-center justify-center'>
            <p className='font-hindGuntur-regular text-white text-3xl tracking-widest leading-10 p-12 rotate-180'>But DraftAi is more than just a drafting tool - it's a catalyst for change in the legal industry. By harnessing the power of AI, we're empowering legal professionals to work smarter, not harder, freeing up valuable time and resources that can be better spent on high-value tasks and client engagement.
            </p>
          </div>
          <p className='text-white font-garet-book text-8xl pr-10 rotate-180'>Our Vision</p>
        </div>
        <div className='flex about3 h-[100vh] w-[100%] items-center justify-center'>
          <div className='flex flex-col items-center justify-center w-[70vw] h-[300px] rounded-xl'>
            <p className=' font-hindGuntur-light text-5xl text-white'>To Become a <span className=' font-hindGuntur-bold text-7xl'>Next-Gen</span> Professional</p>
            <div className='flex gap-10 items-center justify-center'>
              <input type='text' placeholder='Enter your work email here' className='border-2 border-black text-xl rounded-md px-4 py-2 mt-4 w-[600px]' />
              <button type='button' className=' text-black rounded-md text-md h-10 px-10 mt-4 bg-white hover:bg-custom-orange hover:text-black'>JOIN WISHLIST</button>
            </div>
          </div>
        </div>
        <div className='flex about4 h-[100vh] w-[100%] items-center justify-between'>
          <p className='text-white font-garet-book text-7xl pr-10 rotate-180'>Our Technology</p>
          <div className='bg-black w-[50%] h-[80vh] right1 flex items-center justify-center'>
            <p className='font-hindGuntur-regular text-white text-3xl tracking-widest leading-10 p-12 rotate-180'>With our AI-powered platform, legal professionals can now draft documents in a matter of minutes, simply by providing case notes and templates to our intelligent system. Our proprietary technology leverages advanced machine learning algorithms to analyze the input data, identify key information, and generate accurate and customized drafts tailored to the user's specific needs.</p>
          </div>
        </div>
        <div className='flex about3 h-[100vh] w-[100%] items-center justify-center'>
          <div className='flex items-center justify-center'>
            <div className='flex flex-col gap-10 rounded-lg h-[250px] w-[60vw] items-center justify-center pt-14'>
              <p className='font-hindGuntur-light tracking-wider text-white text-2xl text-center'><span className='font-hindGuntur-semiBold text-white text-3xl'>AI</span> has disrupted<span className='font-hindGuntur-semiBold text-white text-3xl'> 30,00,00,000+</span> Jobs <span className=' text-sm'>(As of 2023)</span><br />
                Don't Let it affect yours, Use AI as a professional today!</p>
              <div>
                <button type='button' className=' text-black rounded-md text-lg h-10 bg-white px-10 hover:bg-custom-orange hover:text-white hoverEffectOnWishlist'>JOIN WISHLIST</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    ) : (
      <div>
        <Navbar2 />
        <div className='about2'>
          <div className='rotate-180'>
            <div className='flex h-[100vh] w-[100%] items-center justify-center text-center'>
              <p className='text-white font-garet-book text-5xl pb-16'>Our goal is to Democratise <br /><br />the Skill of Drafting</p>
            </div>
          </div>
        </div>

        <div className='flex about h-[100vh] w-[100%] items-center justify-between'>
          <p className='text-white font-garet-book text-8xl pl-10 pb-8 pt-16'>Our Aim</p>
          <div className='bg-black w-[50%] h-[80vh] right1 flex items-center justify-center p-12'>
            <p className='font-hindGuntur-regular text-white text-3xl tracking-widest leading-10 text-center'>
              At DraftAi, we're pioneering a new era of drafting by seamlessly merging the power of artificial intelligence with the expertise of legal professionals.<br />
              Our mission is simple yet transformative: to revolutionise the way legal documents are created, making the process faster, more efficient, and accessible to all.
            </p>
          </div>
        </div>
        {/* <div className='flex about3 h-[100vh] w-[100%] items-center justify-between'>
          <div className='bg-black w-[50%] h-[80vh] right1 flex items-center justify-center'>
            <p className='font-hindGuntur-regular text-white text-3xl tracking-widest leading-10 p-12'>Founded by a team of legal experts and AI enthusiasts, DraftAi was born out of a shared vision to democratize the skill of drafting for lawyers and consumers alike. We recognized the inherent challenges and time-consuming nature of traditional drafting methods, and we set out to develop an innovative solution that would streamline and automate the process.</p>
          </div>
          <p className='text-white font-garet-book text-8xl pr-10'>Our Story</p>
        </div> */}
        <div className='flex about3 h-[100vh] w-[100%] items-center justify-between rotate-180'>
          <p className='text-white font-garet-book text-8xl pr-10 pb-16 rotate-180'>Our Vision</p>
          <div className='bg-black w-[50%] h-[80vh] right1 flex items-center justify-center'>
            <p className='font-hindGuntur-regular text-white text-3xl tracking-widest leading-10 p-12 rotate-180 text-center'>DraftAi is more than just a drafting tool - it's a catalyst for change in the legal industry. By harnessing the power of AI, we're empowering legal professionals to work smarter, not harder, freeing up valuable time and resources that can be better spent on high-value tasks and client engagement.
            </p>
          </div>
        </div>
        <div className='flex about3 h-[100vh] w-[100%] items-center justify-center'>
          <div className='flex flex-col items-center justify-center w-[70vw] h-[300px] rounded-xl pt-10'>
            <p className=' font-hindGuntur-light text-5xl text-white'>To Become a <span className=' font-hindGuntur-bold text-7xl'>Next-Gen</span> Professional</p>
            <div className='flex gap-10 items-center justify-center'>
              <input type='text' onChange={handleEmailChange} placeholder='Enter your work email here' className='border-2 border-white bg-black text-xl text-white rounded-md px-4 py-2 mt-4 w-[600px]' />
              <button type='button' className='text-black rounded-md text-md h-10 px-10 mt-4 bg-white hover:bg-custom-orange hover:text-black' onClick={openModal}>JOIN WISHLIST</button>
              <Modal isOpen={isModalOpen} onClose={closeModal} email={email} />
            </div>
          </div>
        </div>
        {/* <div className='flex about4 h-[100vh] w-[100%] items-center justify-between'>
          <p className='text-white font-garet-book text-7xl pr-10 rotate-180'>Our Technology</p>
          <div className='bg-black w-[50%] h-[80vh] right1 flex items-center justify-center'>
            <p className='font-hindGuntur-regular text-white text-3xl tracking-widest leading-10 p-12 rotate-180'>With our AI-powered platform, legal professionals can now draft documents in a matter of minutes, simply by providing case notes and templates to our intelligent system. Our proprietary technology leverages advanced machine learning algorithms to analyze the input data, identify key information, and generate accurate and customized drafts tailored to the user's specific needs.</p>
          </div>
        </div>
        <div className='flex about3 h-[100vh] w-[100%] items-center justify-center'>
          <div className='flex items-center justify-center'>
            <div className='flex flex-col gap-10 rounded-lg h-[250px] w-[60vw] items-center justify-center pt-14'>
              <p className='font-hindGuntur-light tracking-wider text-white text-2xl text-center'><span className='font-hindGuntur-semiBold text-white text-3xl'>AI</span> has disrupted<span className='font-hindGuntur-semiBold text-white text-3xl'> 30,00,00,000+</span> Jobs <span className=' text-sm'>(As of 2023)</span><br />
                Don't Let it affect yours, Use AI as a professional today!</p>
              <div>
                <button type='button' className=' text-black rounded-md text-lg h-10 bg-white px-10 hover:bg-custom-orange hover:text-white hoverEffectOnWishlist' onClick={openModal}>JOIN WISHLIST</button>
              </div>
            </div>
          </div>
        </div> */}
        <Footer />
      </div>
    )

  )
}

export default About