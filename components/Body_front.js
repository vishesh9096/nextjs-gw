import Image  from "next/image"
import Table from "components/Table"
import Whatsapp from "components/Whatsapp"



function Body_Front() {
    return(
        <div>
          
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-[#21325E] text-[#FFD300] pt-3">Outcomes We Promise<br/> From The Course <br />
        
        </h1>
        <h1 className="text-white pt-3 text-lg bg-[#21325E] sm:text-3xl  text-center mb-4 md:mb-6 pb-3"> What will your child learn & achieve? </h1>
        <h1 className="max-w-screen-md px-4 md:px-8 mx-auto  text-[#497A3E] font-bold text-lg sm:text-xl">The goal of the course curriculum is to help your child develop a growth mindset. </h1>
        <div class="bg-white py-2 sm:py-4 lg:py-6">
  <div class="max-w-screen-md px-4 md:px-8 mx-auto">
    




    <div class=" text-gray-500 sm:text-xl mb-6 md:mb-8 ">
      
        
        Children with a growth mindset think that their intelligence and skills are something that they can develop through practice and study. 
        <br/><br/>
        In contrast, a fixed mindset is a belief that intelligence and skills are a fixed trait that is set in stone and cannot be improved. Behavioural science research by Stanford professor Carol Dweck has proven otherwise
        <br/><br/>
        In this course, your child will learn (and internalize) a practical ‘growth mindset’ framework (step by step process), which when applied, will help her/him master any skill or subject. 
        <br/>
        

        
    </div>

      <Table/>

    <h2 class="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">They will be able to achieve the above outcomes by learning –</h2>


      
    <div class="list-decimal list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
      <li>What neurons are and the role they play in brain and skill development</li>
      <li className>How the brain functions with regards learning a new skill or subject
            
      </li>
      <li>How practice effects the brain and hence skill mastery</li>
      <li>The concept of a “Growth Mindset” with a 3-step practical process to develop one which can be used to learn and master new skills and subjects</li>
    </div>

    <blockquote class="text-[#497A3E] sm:text-lg italic border-l-4 pl-4 md:pl-6 mb-6 md:mb-8">"The intent is to create a strong learning foundation that your child can replicate across not only learning any skill or subject but through life itself."</blockquote>

    
      <Whatsapp/>

  </div>
</div>
        </div>
        
    )
}

export default Body_Front
