import React from 'react'
import Whatsapp from "components/Whatsapp"

function SessionDetails() {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-md px-4 md:px-8 mx-auto">
    

  <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">Session Details</h2>


    <div class="list-decimal  mb-6 md:mb-8">
        <li className='font-bold'> 
        Session #1
        <div className=' pl-5 font-light text-gray-800'>
            
        a.     A 'Before Course Quiz' to gauge awareness of the 'Growth Mindset' and your child's current mindset bias. 
             <br/>
        b.     Course briefing & growth mindset concept overview for parents.

        </div>
        </li>
        <li className='font-bold'> 
        Session #2 to #11
        <div className=' pl-5 font-light text-gray-800'>
            
        a.     Ten sessions of online story reading with a instructor/guide/coach/expert.
             <br/>
        b.     During each session, the child will read approx. 20 pages of the story together with the tutor who will aid in comprehension. 
            <br/>
        c.     Each session will be followed by a short quiz to validate comprehension and reinforce learnings.

        </div>
        </li>
        <li className='font-bold'> 
        Session #12
        <div className=' pl-5 font-light text-gray-800'>
            
        a.     Final session with exercises - book summary, mindset comprehension quiz and 'After Course Quiz’
             <br/>
        b.     Share reinforcement tools w/parents

        </div>
        </li>

        <Whatsapp/>
        

        
    </div>


  </div>
</div>
  )
}

export default SessionDetails