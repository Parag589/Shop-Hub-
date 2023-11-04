"use client"
import {MyContext} from '@/app/Helper/Contex';
import axios from 'axios';
import React, { useContext, useState } from 'react';




const Hader = (props) => {

  const user = useContext(MyContext)

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
    <div>hello {props.surname} {user}</div>
    <div>hello {user} using CONTEXT API</div>


    </>
  )
};

export default Hader;