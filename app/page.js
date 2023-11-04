"use client"
import React, { useContext, useEffect, useState } from 'react';
import Hader from '@/Components/Hader';
import Link from 'next/link';
import axios from 'axios';
import { MyContext } from './Helper/Contex';

const page = () => {

  const user = useContext(MyContext)
  console.log(user);

  const [Images, setImages] = useState([])
  const [username, setUsername] = useState("")


  const getImages = async () =>{
    try{
      const response = await axios.get("https://picsum.photos/v2/list")
      const data = response.data;
      setImages(data);
      console.log(Images);
    } catch(error){
      console.log("ERROR");
    }
  }
 
  const [users, setUsers] = useState([])

  const getUsers =async () =>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    const data = res.data;
    console.log(data);
    setUsers(data);
  }
  useEffect( ()=> {getUsers()}, []) //using this for calling function automatically means page lode hote he data aa jayega
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


      <h1>Enter Username </h1>
      <form>
        <input type="text" value={username} 
            onChange={
              (e)=>{setUsername(e.target.value)
              console.log(username)
            }} 
              
              placeholder="Enter username"/>
      </form>


      <button onClick={getUsers} className='px-3 py-3 bg-green-700'>Get Data</button>
      <div>
        {users.map((user) => {
          return (
            <div>
              <h1>{user.username} ---- <a href={`/${user.id}`}>Explore</a></h1>
              </div>
              )
              })
              }
      </div>
    </>
  )
}

export default page;