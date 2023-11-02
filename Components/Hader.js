"use client"
import React, { useState } from 'react';

const Hader = (props) => {
  // const name = "parag";
  const[name, setName] = useState('Parag')
//      ^        ^ Function Name
//   variable  

  return (
    // fragments
     <>
    <h1 className='font-bold'>About {name}</h1>
    <button className='bg-slate-600' onClick={()=>setName('Parag2')}>Change Name</button>
    <div>hello {props.name}</div>
    <div>hello {props.surname}</div>
    </>
  )
};

export default Hader;