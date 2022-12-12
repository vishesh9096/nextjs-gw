import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';






function Whatsapp() {
  const notify = () => toast("Thank you for showing your interest in the 'Growth Mindset Course' for your child. We will connect with you on whatsapp within a couple of days for further details.", {
    position: "top-center",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

    

  
  return (
    <div>
      
        <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div class=" lg:flex-row lg:justify-between items-center bg-gray-100 rounded-lg p-4 sm:p-8">
      <div class="mb-4 sm:mb-8  lg:mb-0">
        <h2 class="text-[#497A3E] text-xl sm:text-2xl lg:text-3xl font-bold text-center lg:text-left">Get Notified For The Next Batch</h2>
        <p class="text-gray-500 text-center sm:pb-3 sm:pt-1  lg:text-left">Enter your Name And  Number</p>
      </div>

      <div class=" items-center ">
        <form name="form1" action="#" onsubmit="required()" class="w-full items-center max-w-md space-y-3 gap-2 mb-3">
          <input placeholder="Name" name='text1' class="w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
          <input placeholder="Ph no" type="tel" class="w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
          <button onClick={notify} type="button" class="inline-block  bg-[#497A3E] hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none  px-8 py-2">Notify me of next batch details </button>
          
        </form>
        

        <p class="text-gray-400 text-xs text-center lg:text-right">You Can Directly <a href="https://wa.me/9644679096?text=I want to know about latest Batch updates" class="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Contact us</a> .</p>
      </div>
    </div>
  </div>

</div>


    </div>
  )
}

export default Whatsapp