"use client"
import React, { useState } from 'react';

const page = () => {
  // const name = "parag";
  const[name, setName] = useState(Parag)
//      ^     ^ Function Name
//      variable  

  return (
    // fragments
     <>
    <h1 className='font-bold'>About {name}</h1>
    <button className='bg-slate-600' onClick={()=>setName('Parag2')}>Change Name</button>
    </>
  )
}

export default page;