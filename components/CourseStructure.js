import React from 'react'

function CourseStructure() {
  return (
    <div>
        <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
    <h2 class="text-[#497A3E] text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">The Course Structure</h2>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-12 lg:divide-x">

    <div class="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
         <div class="flex flex-col  items-center gap-2 md:gap-3">
          <div class="w-28 md:w-36 h-32 md:h-40 bg-gray-100  overflow-hidden ">
            <img src="./twelve.png" loading="lazy" alt="Photo by Radu Florin" class="w-full h-full object-cover object-center" />
          </div>
            <div class="text-[#21325E] text-2xl  font-bold text-center sm:text-left">Sessions</div>
        </div>
    </div>

    <div class="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
         <div class="flex flex-col  items-center gap-2 md:gap-3">
          <div class="w-28 md:w-36 h-32 md:h-40 bg-gray-100  overflow-hidden ">
            <img src="./three.png" loading="lazy" alt="Photo by Radu Florin" class="w-full  h-full object-cover object-center" />
          </div>
            <div class="text-[#21325E] text-2xl  font-bold text-center sm:text-left">per Week</div>
        </div>
    </div>

    <div class="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
         <div class="flex flex-col  items-center gap-2 md:gap-3">
          <div class="w-32 md:w-40 h-32 md:h-40 bg-gray-100  overflow-hidden ">
            <img src="./fourty-five.png" loading="lazy" alt="Photo by Radu Florin" class="w-full h-full object-cover object-center" />
          </div>
            <div class="text-[#21325E] text-2xl  font-bold text-center sm:text-left">mins Each</div>
        </div>
    </div>
    

    </div>
  </div>
</div>




    </div>

  )
}

export default CourseStructure
