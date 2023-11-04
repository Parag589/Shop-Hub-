"use client"
import React, { useEffect, useState } from 'react';
import Hader from '@/Components/Hader';
import Link from 'next/link';
import axios from 'axios';


const page = ({params}) => {
    console.log(params.id);
    const { id } = params;

    
  const [users, setUsers] = useState([])

  const getUsers =async () =>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/" + id)
    const data = res.data;
    console.log(data);
    setUsers(data);
  }
  useEffect( ()=> {getUsers()}, [])


  return (
    <>
    <div>API page {JSON.stringify(users)}</div>
    </>
  )
}

export default page;