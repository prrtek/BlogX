import React from "react";

export default function Hero() {
  return (
    <div className='relative min-h-screen overflow-hidden bg-black text-white'>
      <nav className='container relative mx-auto flex w-full items-center justify-between px-5 py-3 text-xl'>
        <div>BlogX</div>
        <div className='flex items-center justify-around'>
          <ul className='mx-3 flex'>
            <li className='mx-3'>AboutUs</li>
            <li className='mx-3'>SignIn</li>
          </ul>
          <button className='hidden rounded-xl bg-[#FF00E5] px-4 py-2 text-white sm:block'>
            Login
          </button>
        </div>
      </nav>

      <div className='relative flex flex-col items-center justify-center'>
        <div className='relative top-32 max-w-3xl font-Manrope'>
          <h1 className='text-5xl font-extrabold sm:text-7xl'>
            Inspire, Inform, Innovate: Your Digital Reading Hub
          </h1>
          <p className='my-4 font-medium'>
            Join Our Community of Avid Readers Today!
          </p>
          <div>
            <button className='m-1 rounded-xl bg-[#FF00E5] px-16 py-3'>
              Read All
            </button>
            <button className='mx-1 rounded-xl bg-white px-16 py-3 text-black'>
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className='relative top-[10vh] max-w-full sm:top-0'>
        <div className='absolute w-full object-contain'>
          <img
            src='/circle.png'
            alt='circle'
            className='w-full h-auto object-contain'
          />
        </div>
      </div>
    </div>
  );
}
