import React from 'react'
import Product from './Product'
import ad from "../assets/banner_image.jpg"
import Image from 'next/image'
const ProductsFeed = (props) => {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 mx-auto lg:grid-cols-3 xl:grid-cols-4 md:-mt-[15rem]'>
        {props.products?.slice(0,4).map((product)=>
        <Product key={product.id} id={product.id} 
        title={product.title} image={product.image}
        category={product.category} description={product.description}
        price={product.price}
        rate={product.rating.rate}
        >
        

        </Product>)}
        <Image src={ad} className='md:col-span-full' alt="error" />
        <div className='md:col-span-2'>
        {props.products?.slice(4,5).map((product)=>
        <Product key={product.id} id={product.id} 
        title={product.title} image={product.image}
        category={product.category} description={product.description}
        price={product.price}
        rate={product.rating.rate}
        >
        

        </Product>)}
        </div>
        
        {props.products?.slice(6).map((product)=>
        <Product key={product.id} id={product.id} 
        title={product.title} image={product.image}
        category={product.category} description={product.description}
        price={product.price}
        rate={product.rating.rate}
        >
        

        </Product>)}
    </div>
  )
}

export default ProductsFeed
