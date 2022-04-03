import React,{useEffect,useState} from 'react'
import Link  from 'next/link'
import { getCategories } from '../services';



const Header = () => {
    const [categories,setCategories] = useState([]);

  useEffect(()=>{
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  },[])
  return (
    <div className="container mx-auto px-10 mb-8">
        <div className="border-b w-full inline-block border-blue-400 py-8">
            <div className="md:float-left block">
                <Link href='/'>
                     <span className='flex cursor-pointer items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto  mr-8'>
            <img src={'/profile.jpg'} 
            height="50px"
            width="50px"
            className='align-middle rounded-full'
            // key={post.image}
            /> 
            </span>
                </Link>
            </div>
            <div className="hidden  md:float-left md:contents">
            {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className="  md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                        {category.name}
                    </span>
                </Link>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Header