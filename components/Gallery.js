import React from 'react'

function Gallery() {
  return (
    <div>
    

      <div class="bg-white py-6 sm:py-8 lg:py-12">
<div class="max-w-screen-xl px-4 md:px-8 mx-auto">


  <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-12 lg:divide-x">

  <div class="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
       <div class="flex flex-col  items-center gap-2 md:gap-3">
        <div class="w-24 md:w-28 h-32 md:h-40 bg-gray-100  overflow-hidden ">
          <img src="/Icon.png" loading="lazy"  class="w-full  h-full object-cover object-center" />
        </div>
          <div class="text-[#21325E] text-lg  font-bold text-center sm:text-left">An Early Readers Book</div>
      </div>
  </div>

  <div class="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
       <div class="flex flex-col  items-center gap-2 md:gap-3">
        <div class="w-28 md:w-28 h-32 md:h-40 bg-gray-100  overflow-hidden ">
          <img src="/assignment.png" loading="lazy" alt="Photo by Radu Florin" class="w-full h-full object-cover object-center" />
        </div>
          <div class="text-[#21325E] text-lg  font-bold text-center sm:text-left">Assignments/Quizes</div>
      </div>
  </div>

  <div class="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
       <div class="flex flex-col items-center gap-2 md:gap-3">
        <div class="w-28 md:w-36 h-32 md:h-40 bg-gray-100  overflow-hidden ">
          <img src="/assignment.png" loading="lazy" alt="Photo by Radu Florin" class="w-full h-full object-cover object-center" />
        </div>
          <div class="text-[#21325E] text-lg  font-bold text-center sm:text-left">Reinforcement Tools</div>
      </div>
  </div>
  <div class="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
       <div class="flex flex-col items-center gap-2 md:gap-3">
        <div class="w-28 md:w-36 h-32 md:h-40 bg-gray-100  overflow-hidden ">
          <img src="/assignment.png" loading="lazy" alt="Photo by Radu Florin" class="w-full h-full object-cover object-center" />
        </div>
          <div class="text-[#21325E] text-lg  font-bold text-center sm:text-left">Reflection</div>
      </div>
  </div>

  </div>
</div>
</div>




  </div>
  )
}

export default Gallery