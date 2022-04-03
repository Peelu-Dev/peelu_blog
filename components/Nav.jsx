import React, { useState,useEffect } from 'react'
import Link from 'next/link';
import { getCategories } from '../services';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'



const Nav = () => {
    // let Links =[
    //   {name:"HOME",link:"/"},
    //   {name:"SERVICE",link:"/"},
    //   {name:"ABOUT",link:"/"},
    //   {name:"BLOG'S",link:"/"},
    //   {name:"CONTACT",link:"/"},
    // ];
    let [open,setOpen]=useState(false);

    const [categories,setCategories] = useState([]);

  useEffect(()=>{
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  },[])
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <img src={'/profile.jpg'} 
            height="50px"
            width="50px"
            className='align-middle rounded-full'
            // key={post.new}
            /> 
        {/* <ion-icon name="logo-ionic"></ion-icon> */}
        </span>
      </div>
      
      
      <div onClick={()=>setOpen(!open)}  className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      {open ? <AiOutlineClose/> : <AiOutlineMenu/>}
      </div>
      
      <ul className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'} `}>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className=' cursor-pointer  block md:ml-8 text-xl md:my-0 my-2 '>
            {category.name}
          </span>
        </Link>
      ))}
      </ul>
      </div>
    </div>
  )
}

export default Nav