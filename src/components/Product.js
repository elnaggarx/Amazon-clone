import React, { useState } from 'react'
import image1 from "../assets/product_0.jpg"
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import prime from "../assets/prime.webp"
const Product = (props) => {
    
    const [rating] = useState(Math.floor(props.rate));
    const [hasPrime]= useState(Math.random() < 0.5)
  return (
    <div className='relative flex flex-col items-center  m-5 z-30 p-10   bg-white'>
        <p className='absolute top-2 right-2 text-xs text-gray-400 italic' >{props.category}</p>
        <img src={props.image}  className='w-[200px] h-[200px]' objectFit='contain' ></img>
        <h4 className='my-3 h-[10%] line-clamp-2'>{props.title}</h4>
        <div className='flex'>{Array(rating).fill().map(()=><StarIcon className='w-4 text-yellow-400'></StarIcon>)}</div>
        <p className='text-xs my-2 line-clamp-2'>{props.description}</p>
        <p className='mb-5'>{props.price} EGP</p>
        {hasPrime &&
        <div className='flex items-center -mt-5 space-x-2 h-[5%]'>
            <Image src={prime} className='w-12 '></Image>
            <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
            
        </div>
        }
        <button className='m-auto p-2 bg-gradient-to-b from-yellow-200 to-yellow-400 text-xs md:text-sm border
         border-yellow-300 rounded-sm focus:outline-none focus:ring-2
         focus:ring-yellow-500 active:from-yellow-500 
         w-[90%]
         '>Add to basket</button>
    </div>
  )
}

export default Product
    