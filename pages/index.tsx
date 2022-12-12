import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Body_front from "../components/Body_front";
import CourseDetails from "../components/CourseDetails"
import CourseIncludes from "../components/CourseIncludes"
import CourseStructure from "../components/CourseStructure"

import SessionDetails from "../components/SessionDetails"
import { ToastContainer } from 'react-toastify';


const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Growth Mindset</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
      

      <Header/>
      <Body_front/>
      <CourseDetails/>
      <CourseIncludes/>
      <CourseStructure/>
      <SessionDetails/>
     
      


      
      
      {/* banner */}

    </div>
  )
}

export default Home
