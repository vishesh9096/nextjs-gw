import React from 'react'

function Whatsapp() {
  return (
    <div>
        <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div class=" lg:flex-row lg:justify-between items-center bg-gray-100 rounded-lg p-4 sm:p-8">
      <div class="mb-4 sm:mb-8 lg:mb-0">
        <h2 class="text-[#497A3E] text-xl sm:text-2xl lg:text-3xl font-bold text-center lg:text-left">Get Notified For The Next Batch</h2>
        <p class="text-gray-500 text-center lg:text-left">Enter your Name And  Number</p>
      </div>

      <div class=" items-center lg:items-end">
        <form class="w-full max-w-md flex gap-2 mb-3">
          <input placeholder="Name" class="w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
          <input placeholder="Ph no" type="tel" class="w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
          <button class="inline-block bg-[#497A3E] hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Send</button>
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