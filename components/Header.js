import Image  from "next/image"
import {UserCircleIcon} from '@heroicons/react/solid'



function Header() {
    return(
        <div>
  <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div class="max-w-screen-2xl px-4 md:px-6 mx-auto ">
    <header class="flex justify-between items-center py-4 md:py-6 mb-6 md:mb-8 xl:mb-10  ">

      <a href="/" class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
        <svg width="95" height="94" viewBox="0 0 95 94" class="w-6 h-auto text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M96 0V47L48 94H0V47L48 0H96Z" />
        </svg>

        GrowthMindset.
      </a>
    </header>

    <section class="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">

      <div class="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24">
        <p class="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">See your child Ace any Subject or Skill</p>

        <h1 class="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12"> Transform your child’s Learning Mindset from a Fixed to a Growth Mindset</h1>

        <p class="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">A 4-week story driven course 
        <br/>
to teach your child how to
<br/>
learn and master any new skill or subject.</p>

        <div class="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
          <a href="https://wa.me/9644679096?text=hello" class="inline-block bg-indigo-500 hover:bg-yellow-300 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">

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
      </div>

      <div class="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
        <img src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Fakurian Design" class="w-full h-full object-cover object-center" />
      </div>

    </section>
    <div className="max-w-screen-md px-4 md:px-8 mx-auto pt-6 md:pt-12 text-slate-700 sm:text-xl">
    Knowledge is power. And the knowledge about the concept of a growth mindset a superpower – that can have a profound effect not only on your child’s performances, but also on their lives.
    </div>
  </div>
</div>
  </div>


        
        
    )
}

export default Header