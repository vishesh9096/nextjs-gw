import React from 'react'

function CourseDetails() {
  return (
    <div>
      <h1 class="text-3xl sm:text-4xl font-bold text-center bg-[#21325E] text-[#FFD300] pt-3">Course Details And Session Details <br />
        
        </h1>
        <h1 className="text-white pt-3 text-lg bg-[#21325E] sm:text-3xl  text-center mb-4 md:mb-6 pb-3"> Content And Structure </h1>
        <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
    <h2 class="text-[#497A3E] text-3xl  lg:text-4xl font-bold text-center mb-8 md:mb-12">The Course Logistics</h2>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-12 lg:divide-x">

    <div class="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
         <div class="flex flex-col  items-center gap-2 md:gap-3">
          <div class="w-24 md:w-28 h-32 md:h-40 bg-gray-100  overflow-hidden ">
            <img src="./Icon.png" loading="lazy" alt="Photo by Radu Florin" class="w-full h-full  bg-white p-4 object-cover object-center" />
          </div>
            <div class="text-[#21325E] text-lg  font-bold text-center sm:text-left">Taught through a story</div>
        </div>
    </div>

    <div class="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
         <div class="flex flex-col  items-center gap-2 md:gap-3">
          <div class="w-24 md:w-28 h-32 md:h-40 bg-gray-100  overflow-hidden ">
            <img src="./online.png" loading="lazy" alt="Photo by Radu Florin" class="w-full h-full object-cover object-center" />
          </div>
            <div class="text-[#21325E] text-lg  font-bold text-center sm:text-left">Online</div>
        </div>
    </div>

    <div class="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
         <div class="flex flex-col items-center gap-2 md:gap-3">
          <div class="w-24 md:w-28 h-32 md:h-40 bg-gray-100  overflow-hidden ">
            <img src="./group.png" loading="lazy" alt="Photo by Radu Florin" class="w-full h-full object-cover object-center" />
          </div>
            <div class="text-[#21325E] text-lg  font-bold text-center sm:text-left">In groups of maximim 5 children</div>
        </div>
    </div>

    </div>
  </div>
</div>




    </div>
  )
}

export default CourseDetails
