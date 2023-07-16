import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import MapChart from './Map'
import dotenv from 'dotenv'
import { useState } from 'react';


const Contact = () => {

  const [success, setSuccess] = useState(false);

  const form = useRef();

  // const YOUR_SERVICE_ID = process.env.YOUR_SERVICE_ID;
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bnx86ij', 'template_twc5wzc', form.current, 'X2Fc8vYGcJWzTuIEe')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
      }, (error) => {
        console.log(error.text);
      });

  }

  return (
    <div className=" mx-auto h-full flex items-center justify-center snap-center snap-always">

      <div className="flex  px-4 w-7/12  justify-end">
        <div className='flex flex-col w-5/6 items-center'>
          <h2 className="text-white font-bold text-2xl md:text-6xl my-4">Contact</h2>
          <form className='flex flex-col gap-2 w-5/6  h-84' ref={form} onSubmit={handleSubmit}>

            <span class="text-xs sm:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-slate-100">
              Name
            </span>
            <input type="text" name="name" class="mt-1 px-3 py-2  text-stone-600 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md text-xs sm:text-base focus:ring-1" placeholder="Your Name" />

            <span class=" text-xs sm:text-base after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-100">
              Email
            </span>

            <input type="email" name="email" class=" text-xs sm:text-base mt-1 px-3 py-2 text-stone-600 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1" placeholder="you@example.com" />

            <span class="after:content-['*'] text-xs sm:text-base after:ml-0.5 after:text-red-500 block font-medium text-gray-100">
              Message
            </span>
            <textarea name="message" class="  mt-1 px-3 py-2 text-stone-600 bg-white border shadow-sm h-40 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md text-xs sm:text-base focus:ring-1" placeholder="Type your message here" />

            <button class=" bg-purple-600 p-2 mt-2 rounded-md" type="submit" value="Send">Send</button>
            {success && "Success in sending the message"}
          </form>

        </div>



      </div>
      <div className="w-3/6 h-full flex  justify-center">
        <MapChart />
      </div>
    </div>
  )
}

export default Contact