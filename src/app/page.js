"use client";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import ProductsFeed from "@/components/ProductsFeed";
import { useEffect, useState } from "react";
export default function Home() {
  const [products,setProducts] = useState(null);
  useEffect(
     ()=>{
        fetch("https://fakestoreapi.com/products") .then((res)=>res.json()).then((products)=>{setProducts(products)});
    }
  ,[])

  
  return (<div>
      <Header></Header>
      <main className='max-w-screen-2xl mx-auto flex flex-col items-center bg-gray-100'>
      <Carousel></Carousel>
      <ProductsFeed products={products}></ProductsFeed>

      </main>
    </div>
  );
}