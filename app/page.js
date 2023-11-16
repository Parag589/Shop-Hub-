"use client"
import React, { useContext, useEffect, useState } from 'react';
import Hader from '@/Components/Hader';
import Card from '@/Components/Card';
import Cardbackground from '@/Components/Cardbackground';
import Footer from '@/Components/Footer';
import { FaBagShopping } from "react-icons/fa6";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Link from 'next/link';
import axios from 'axios';
import { MyContext } from './Helper/Contex';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const page = () => {

  const user = useContext(MyContext)
  console.log(user);

  const [Images, setImages] = useState([])
  const [username, setUsername] = useState("")


  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list")
      const data = response.data;
      setImages(data);
      console.log(Images);
    } catch (error) {
      console.log("ERROR");
    }
  }

  const [users, setUsers] = useState([])
  const [users2, setUsers2] = useState([])
  const [users3, setUsers3] = useState([])
  const [users4, setUsers4] = useState([])



  const getUsers = async () => {
    const res = await axios.get("https://fakestoreapi.com/products")

    const data = res.data.slice(0, 1);
    const data2 = res.data.slice(1, 2);
    const data3 = res.data.slice(2, 3);
    const data4 = res.data.slice(3, 4);


    // setProducts(response.data.slice(0, 3)); // get first 3 products
    console.log(data);
    setUsers(data);
    setUsers2(data2);
    setUsers3(data3);
    setUsers4(data4);

  }
  useEffect(() => { getUsers() }, []) //using this for calling function automatically means page lode hote he data aa jayega

  const notify = () => {
    console.log("hello tost");
    toast("Reset");
  }
  return (
    <>
      <Cardbackground/>
      <div className='shophubcard product-cards'>
        {users.map((user) => {
          return (
            <>
              <Card image={user.image} category={user.category} rating={user.rating.count} color={'#f0969e'}/>
            </>
          )
        })
        }

        {users2.map((user) => {
          return (
            <>
              <Card image={user.image} category={user.category} rating={user.rating.count} color={'#d5d5d4'}/>
            </>
          )
        })
        }

        {users3.map((user) => {
          return (
            <>
              <Card image={user.image} category={user.category} rating={user.rating.count} color={'#1e1e1e'}/>
            </>
          )
        })
        }

        {users4.map((user) => {
          return (
            <>
              <Card image={user.image} category={user.category} rating={user.rating.count} color={'#cb141a'}/>
            </>
          )
        })
        }
      </div>


      <div className="footer-icons" >
        <button className="card-icon1 ">
          <FaSearch className="bag-icon card-icons" />
        </button>
      </div>

      
      <div className="related-products">
           <div className="related-products-header">
                <h5 style={{fontWeight:'bold'}}>Related Products</h5>
                
           </div>
           <div className='shophubcard product-cards'>
        {users.map((user) => {
          return (
            <>
              <Card image={user.image} category={user.category} rating={user.rating.count} color={'#f0969e'}/>
            </>
          )
        })
        }

        {users2.map((user) => {
          return (
            <>
              <Card image={user.image} category={user.category} rating={user.rating.count} color={'#d5d5d4'}/>
            </>
          )
        })
        }

        {users3.map((user) => {
          return (
            <>
              <Card image={user.image} category={user.category} rating={user.rating.count} color={'#1e1e1e'}/>
            </>
          )
        })
        }

        {users4.map((user) => {
          return (
            <>
              <Card image={user.image} category={user.category} rating={user.rating.count} color={'#cb141a'}/>
            </>
          )
        })
        }
      </div>
        </div>

        <Footer/>
    </>
  )
}

export default page;