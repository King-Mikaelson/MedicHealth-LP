import React, { useState } from 'react'
import { Bars3Icon, BellIcon, XMarkIcon, SearchIcon, ShoppingCartIcon} from '@heroicons/react/24/outline'
import Image from "next/image";
import Link from 'next/link';
import Logo from '../../public/logoImage.png';


export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products")
  const data = await  res.json();

  return{
    props:{content : data}
  }
}


function NavBar() {

    const navigation = [
        { name: 'About Us',href:"#first-section", current: true },
        { name: 'Weight loss', href:"#second-section", current: false },
        { name: 'Pricing', href:"#third-section", current: false },
        { name: 'FAQ', href:"#fourth-section", current: false },
      ]
      const[open, setOpen] = useState(false)
  return (
  <nav className='shadow-md w-full fixed top-0 left-0 z-10'>
    <div className='md:flex flex items-center  justify-between  bg-white py-4 px-4  lg:px-24 w-full  relative'>
    <Bars3Icon onClick={() => setOpen(prevValue => !prevValue)} className="md:hidden block h-6 w-6" aria-hidden="true" />
    <div  className='cursor-pointer flex justify-between items-center px-2'>
    <Image src={Logo} alt="logo" className='
    '/>
    </div>
    <ul className='hidden md:flex md:items-center md:justify-center md:static md:w-auto md:bg-white md:text-black  absolute top-0 right-0 text-white bg-black w-full'>
       {
        navigation.map((link) => (
            <li key={link.name} className="md:ml-8 text-2xl md:my-0 my-7">
                <Link className={link.name=== "Healthcare" ?'text-[#000000] text-sm font-Poppins font-semibold hover:underline hover:underline-offset-8' : 'text-[#121212] text-sm font-Poppins font-normal hover:underline hover:underline-offset-8'} href={link.href}>{link.name}</Link>
            </li>
        ))
       }
    </ul>

    <div className={open ? 'md:hidden z-10 md:flex md:items-center md:static md:w-auto   absolute top-0 right-0 text-black bg-[#FFFFFF] w-full h-[100vh] transition-all duration-500 ease-in' :  "hidden"}>
   <div className='cursor-pointer flex justify-between px-2 pt-5'>
   <Image src={Logo} alt="logo"/>
   <XMarkIcon  onClick={() => {setOpen(prevValue => !prevValue)}} className="block h-10 w-6" aria-hidden="true"/>
    </div>
    <ul className='flex flex-col gap-5 justify-center pl-0 pl-4'>
       {
        navigation.map((link) => (
            <li key={link.name} className="md:flex text-2xl md:my-0 my-3">
                <Link onClick={() => {setOpen(prevValue => !prevValue)}} className=' hover:underline hover:underline-offset-8 font-Poppins font-normal' href={link.href}>{link.name}</Link>
            </li>
        ))
       }
    </ul>
    </div>
    <div className="flex items-center ">

                <Link href="/">
                <button
                  type="button"
                  className='bg-[#191BFB] py-3 px-5 justify-center items-center rounded-[100px] hidden md:flex'
                >
                <p className='text-[#FFFFFF] text-base font-Poppins font-medium '>Patient Portal</p>
                </button>
                </Link> 

      </div>
    </div>
  </nav>
  )
}

export default NavBar
