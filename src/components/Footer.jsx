import React, { useEffect, useRef, useState } from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from 'react-router-dom'
import './footer.scss'
import './style.css'
import rotate from '../assets/rotate.png'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';

const Footer = () => {
  const firstText = useRef(null)
  const secondText = useRef(null)
  const thirdText = useRef(null)
  const forthText = useRef(null)
  const slider = useRef(null)
  let xPercent = 0
  let direction = -1

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Register animation frame
    requestAnimationFrame(animation);

    // ScrollTrigger setup
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: 'footer',
        start: 'top bottom',  // Trigger animation when footer reaches the viewport's bottom
        end: 'bottom top',    // End when footer leaves the top of the viewport
        scrub: true,
        onUpdate: (e) => {
          direction = e.direction === 1 ? -1 : 1;  // Adjust direction based on scroll
        },
      },
      x: "-=300px" // Control the animation offset
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    gsap.set(thirdText.current, { xPercent: xPercent })
    gsap.set(forthText.current, { xPercent: xPercent })
    xPercent += 0.1 * direction
    requestAnimationFrame(animation)
  }


  return (
    <footer className="relative bg-black min-h-[100vh] text-white">.
      <div className='py-16'>
        <div ref={slider} className='relative whitespace-nowrap flex justify-evenly gap-9 md:py-16'>
          <div ref={firstText} className='flex justify-around items-center gap-9' >
            <h3 className='text-[50px] md:text-[150px] font-[300] leading-[88px] capitalize whitespace-nowrap'>follow us</h3>
            <div className="w-[50px] md:w-[150px] bg-white rounded-full p-2">
              <img src={rotate} className=' rotate' />
            </div>
          </div>
          <div ref={secondText} className='flex justify-around items-center gap-9'>
            <h3 className='text-[50px] md:text-[150px] font-[300] leading-[88px] capitalize'>follow us</h3>
            <div className="w-[50px] md:w-[150px] bg-white rounded-full p-2">
              <img src={rotate} className='rotate' />
            </div>
          </div>
          <div ref={thirdText} className='flex justify-around items-center gap-9'>
            <h3 className='text-[50px] md:text-[150px] font-[300] leading-[88px] capitalize'>follow us</h3>
            <div className="w-[50px] md:w-[150px] bg-white rounded-full p-2">
              <img src={rotate} className=' rotate' />
            </div>
          </div>
          <div ref={forthText} className='flex justify-around items-center gap-9'>
            <h3 className='text-[50px] md:text-[150px] font-[300] leading-[88px] capitalize'>follow us</h3>
            <div className="w-[50px] md:w-[150px] bg-white rounded-full p-2">
              <img src={rotate} className=' rotate' />
            </div>
          </div>
        </div>
      </div>


      <div>
        <h3 className='text-[15.36px] font-[500] leading-[16.8px] ml-16 mb-9'>SOCIAL MEDIA AND CONTACTS</h3>
        {
          [
            { link: 'https://www.instagram.com', text: 'instagram' },
            { link: 'https://www.linkedin.com', text: 'linkedIn' },
            { link: 'https://www.github.com', text: 'github' },
            { link: 'https://www.youtube.com', text: 'youtube' },
            { link: 'https://www.facebook.com', text: 'facebook' },
            { link: 'https://www.twitter.com', text: 'twitter' },
          ].map((item, index) => (
            <div key={index} className='relative w-full h-[10vh] sm:h-[15vh] border-b border-t border-[#1D1D1D] py-2 px-6 flex items-center group'>
              <Link to={item.link} target='_blank'>
                <h3 className='md:text-[30px] font-[500] leading-[33px] md:ml-9 capitalize'>{item.text}</h3>
                <div className='second-moving-text absolute w-full h-full bg-white inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-around gap-5'>

                  <ul className='w-full h-full'>
                    {
                      Array.from({ length: 20 }).map((_, index) => (
                        <li key={index} className='w-full h-full flex gap-5 justify-around items-center'>
                          <h2 className='text-black text-[34px] font-[400] capitalize'>{item.text}</h2>
                          <FiArrowUpRight color='black' size={35} />
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </Link>
            </div>
          ))
        }

      </div>

      <div className='w-full min-h-[40vh] py-12 pb-9 flex flex-wrap md:ml-9'>
        <div className='min-w-[300px] ml-9 '>
          <div className='flex justify- gap-5 md:gap-16 md:text-[30px] font-[400]'>
            <p>MAIN OFFICE</p>
            <p>901 N Pitt Street</p>
          </div>
          <div className='md:text-[30px] font-[400]'>
            <p>Alexandria VA, 22314</p>
          </div>
          <a href="mailto:info@nepstark.com" className='hover-botton border py-4 px-6 rounded-full mt-9 inline-block text-[24px] font-medium' >
            <span>INFO@NEPSTARK.COM</span>
          </a>

        </div>
      </div>
      <div className='relative w-full min-h-[100vh]'>
        <div className='absolute inset-0 z-10'>
          <video autoPlay muted loop src='https://cuberto.com/assets/footer/ropes.mp4' className='w-full h-full object-cover' />
        </div>
        <div className='relative w-full h-[100vh] z-20 text-white'>
          <div className='w-full h-[80%] flex justify-center items-center flex-col leading-tight'>
            <h1 className='text-[80px] md:text-[158px]'>Have</h1>
            <em className='text-[80px] md:text-[158px]'>an idea?</em>
            <a href="/contact-us" className='hover-botton border py-6 px-8 rounded-full mt-9  font-medium flex items-center justify-center' >
              <span className='text-[80px] md:text-[124px]'>TELL US</span>
            </a>
          </div>
          <div className='relative w-full h-[20%] flex flex-col sm:flex-row items-center md:ml-12 sm:pl-12 gap-3'>
            <a href="mailto:info@nepstark.com" className='hover-botton border py-2 sm:py-1 px-4 rounded-full mt-3 flex items-center text-[17px] font-[500]' >
              <span>INFO@NEPSTARK.COM</span>
            </a>
            <a href="callto:9849992104" className='hover-botton border py-2 sm:py-1 px-4 rounded-full mt-3 flex items-center text-[17px] font-[500]' >
              <span>9849992104</span>
            </a>
            <div className=' mt-3 inline-block text-[17px] font-medium sm:ml-36 sm:pl-24 pb-5 sm:pb-0'>
              <span className='hover-line'>PRIVACY POLICY</span>
            </div>
          </div>
        </div>
      </div>


    </footer>
  )
}

export default Footer
