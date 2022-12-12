import Image  from "next/image"
import {UserCircleIcon} from '@heroicons/react/solid'



function Header() {
    return(
        <div>
  <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div class="max-w-screen-2xl px-4 md:px-6 mx-auto">
    

    <section class="flex flex-col items-center">

      


      <div class=" flex flex-col items-center text-center pt-8 lg:pt-32 pb-0 sm:pb-16 lg:pb-32">
        

        <h1 class="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">Transform your child’s learning mindset <br/>from  a Fixed to a Growth Mindset</h1>

        <p class="text-[#21325E] md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">See your child ace <br/>any subject or skill</p>


        <p class="text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">A 4-week story driven course 
<br/>to teach your child how to
<br/>learn and master any new skill or subject.</p>

<div class="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
          <a href="https://wa.me/9644679096?text=hello" class="inline-block bg-[#21325E] hover:bg-[#497A3E] active:bg-[#21325E] focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">

          <button class="text-xl  relative  text-white font-bold py-2 px-10 md:px-16 rounded-full">
   Whatsapp us
  <Image  className="p-2  "
                src='https://cdn-icons-png.flaticon.com/512/2504/2504957.png'
                layout='fill'
                objectFit="contain"
                objectPosition="left"

                

                />
</button>
          </a>
          
        </div>
        <h1 className="pt-4 text-bold text-xl">(For children in grades 3 to 5 only)</h1>
        <div className="max-w-screen-md px-4 md:px-8 mx-auto pt-6 md:pt-12 text-slate-700 sm:text-xl italic">
    Knowledge is power. And the knowledge about the concept of a growth mindset a superpower – that can have a profound effect not only on your child’s performances, but also on their lives.
    </div>

      </div>
    </section>
  </div>
</div>

  </div>


        
        
    )
}

export default Header
