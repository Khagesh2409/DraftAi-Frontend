import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import twitterLogo from '../assets/TwitterLogo.png'
import linkedinLogo from '../assets/LinkedinLogo.png'
import facebookLogo from '../assets/FacebookLogo.png'
import instagramLogo from '../assets/InstagramLogoSvg.svg'
import contactUsImage from '../assets/ContactUsPageImg.jpg'
import Navbar2 from './Navbar2'

function Contact() {
  return (
    <div>
      <Navbar2 />
      <div className='flex justify-evenly p-10'>
        <div className='flex flex-col gap-6 justify-center'>
          <p className='text-3xl font-hindGuntur-semiBold'>Email <br /><span className='text-2xl font-hindGuntur-regular'>teamdraftai@gmail.com</span></p>
          <p className='text-3xl font-hindGuntur-semiBold'>Phone Number <br /><span className='text-2xl font-hindGuntur-regular'>+91 981 108 8200</span></p>
          <div className='flex flex-col gap-2'>
            <p className='text-3xl font-hindGuntur-semiBold'>Founders</p>
            <div className='flex flex-col gap-4'>
              <div>
                <p className='text-2xl font-hindGuntur-regular'>Toyesh Bhardwaj (CEO)</p>
                <p className='text-xl font-hindGuntur-regular'>toyeshbhardwaj19@gmail.com</p>
              </div>
              <div>
                <p className='text-2xl font-hindGuntur-regular'>Ishikaa Seth (COO)</p>
                <p className='text-xl font-hindGuntur-regular'>ishikaaseth01@gmail.com</p>
              </div>
            </div>

          </div>
        </div>
        <div className='flex gap-8'>
          <div className='flex flex-col gap-8 justify-center items-center'>
            <a href='https://www.linkedin.com/company/draftai'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" class="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg></a>
            <a href='https://twitter.com/draftai_in'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-twitter-x" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg></a>
            <a href='https://www.facebook.com/draftai.in'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg></a>
            <a href='https://www.instagram.com/draftai.in/'><img src={instagramLogo} alt='Instagram Logo' className='h-[50px] w-[50px]' /></a>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.8169919135466!2d77.02104411994497!3d28.59278886501463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbb2425573b9%3A0xc133d03f5a7588e1!2sInnovation%20%26%20Incubation%20Centre%20(I2C)!5e0!3m2!1sen!2sin!4v1710179304770!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className='flex justify-evenly p-10'>
        <img src={contactUsImage} alt='Contact Us' className='w-[35%] h-[70vh] mt-[30px]' />
        <form className='flex flex-col items-center justify-center gap-6 p-10'>
          <p className='text-3xl font-hindGuntur-semiBold'>Get in touch with us</p>
          <input type='text' placeholder='Name' className='h-12 w-96 border-2 border-black rounded-xl p-4' />
          <input type='email' placeholder='Email' className='h-12 w-96 border-2 border-black rounded-xl p-4' />
          <input type='text' placeholder='Subject' className='h-12 w-96 border-2 border-black rounded-xl p-4' />
          <textarea type='text' placeholder='Message' className='h-32 w-96 border-2 border-black rounded-xl p-4' />
          <button className='h-12 w-96 bg-black text-white rounded-xl hover:bg-custom-grey hover:text-black'>Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Contact