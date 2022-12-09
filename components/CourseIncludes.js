import React from 'react'
import Gallery from "/components/Gallery"

function CourseIncludes() {
  return (
    <div>
      
      <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
    <div class="mb-6 sm:mb-10 lg:mb-16">
      <h2 class="text-[#497A3E] text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">The course includes</h2>
    </div>

    <div class="flex flex-col sm:border-t sm:border-b sm:divide-y mb-5 sm:mb-8">
      
      <div class="py-5 sm:py-8">
        <div class="flex flex-wrap gap-4 lg:gap-6 sm:py-2.5 items-center">
          <div class="sm:-my-2.5">
            <div  class="group w-24 sm:w-40 h-40 sm:h-56 block bg-gray-100 rounded-lg overflow-hidden relative">
              <img src="./Icon.png" loading="lazy" alt="Photo by Thái An" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
            </div>
          </div>

          <div class="flex flex-col justify-center flex-1">
            <div>
              <h1 class="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1">An early readers book</h1>

              <span class="block text-gray-500">An early reader’s chapter book about the thrilling journey of a penguin who must overcome her self-belief (fixed mindset) - that she is not capable of learning – and develop a growth mindset to learn new skills to save a family catastrophe.</span>

            </div>
          </div>
        </div>
      </div>

      <div class="py-5 sm:py-8">
        <div class="flex flex-wrap gap-4 lg:gap-6 sm:py-2.5 items-center">
          <div class="sm:-my-2.5">
            <div  class="group w-24 sm:w-40 h-40 sm:h-56 block bg-gray-100 rounded-lg overflow-hidden relative">
              <img src="./assignment.png" loading="lazy" alt="Photo by Thái An" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
            </div>
          </div>

          <div class="flex flex-col justify-center flex-1">
            <div>
              <h1 class="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1">Assignments/Quizzes</h1>

              <span class="block text-gray-500">Assignments/Quizzes (15) to verify comprehension and mindset transformation.</span>

            </div>
          </div>
        </div>
      </div>

      <div class="py-5 sm:py-8">
        <div class="flex flex-wrap gap-4 lg:gap-6 sm:py-2.5 items-center">
          <div class="sm:-my-2.5">
            <div  class="group w-24 sm:w-40 h-40 sm:h-56 block bg-gray-100 rounded-lg overflow-hidden relative">
              <img src="./assignment.png" loading="lazy" alt="Photo by Thái An" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
            </div>
          </div>

          <div class="flex flex-col justify-center flex-1">
            <div>
              <h1 class="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1">Reinforcement Tools</h1>

              <span class="block text-gray-500">Reflection exercises (10) to ensure internalization.</span>

            </div>
          </div>
        </div>
      </div>

      <div class="py-5 sm:py-8">
        <div class="flex flex-wrap gap-4 lg:gap-6 sm:py-2.5 items-center">
          <div class="sm:-my-2.5">
            <div  class="group w-24 sm:w-40 h-40 sm:h-56 block bg-gray-100 rounded-lg overflow-hidden relative">
              <img src="./assignment.png" loading="lazy" alt="Photo by Thái An" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
            </div>
          </div>

          <div class="flex flex-col justify-center flex-1">
            <div>
              <h1 class="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1">Reflection</h1>

              <span class="block text-gray-500">Reinforcement tools (3 sets) and action points for parents to ensure sustenance and application throughout life.</span>

            </div>
          </div>
        </div>
      </div>

    </div>


    

  </div>
</div>
 

   </div>
        
  )
}

export default CourseIncludes
