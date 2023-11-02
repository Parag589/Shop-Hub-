"use client"
import React, { useState } from 'react';
import Hader from '@/Components/Hader';
import Link from 'next/link';
import axios from 'axios';

const page = () => {
  const [Images, setImages] = useState([])

  const getImages = async () =>{

    // correct the code

    
    try{
      const response = await axios.get("https://picsum.photos/v2/list")
      const data = response.data;
      setImages(data);
      console.log(Images);
    } catch(error){
      console.log("ERROR");
    }

  }
  return (
    <>
    <Hader name={'Parag'} surname={'Agarwal'}/>
    <Link href= "/About">About</Link>
    <Link href="/Courses">Cources</Link>

      <button onClick={getImages} className='px-3 py-3 bg-green-700'>Get Images</button>
      
      <div>
        {Images.map((elem, i) => {
           return<img 
           key={i}
           src={elem.download_url}
           width={300}
           height={300}
           className='inline-block'
           />
        })}
      </div>

    </>
  )
}

export default page;