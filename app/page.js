"use client"
import React, { useState } from 'react';
import Hader from '@/Components/Hader';
import Link from 'next/link';

const page = () => {
  return (
    <>
    <Hader name={'Parag'} surname={'Agarwal'}/>
    <Link href= "/About">About</Link>
    <Link href="/Courses">Cources</Link>

    </>
  )
}

export default page;