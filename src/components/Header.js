import React from 'react'
import Image from 'next/image';
import image1 from "../assets/logo.png";
import image2 from "../assets/usa.png"
import {MenuIcon , SearchIcon , ShoppingCartIcon} from "@heroicons/react/outline";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  return (
    <header>
        <div className='flex items-center bg-[#131921] p-auto h-[9.7vh] flex-grow px-2'>
            <div className='flex-grow sm:flex-grow-0 link'>
                <Image src={image1} width={103}   className='cursor-pointer ' alt='amazon-logo'></Image>
                
            </div>
            <div className=' flex-col link hidden lg:flex'>
                <p className='text-[#e6e6e6ce] text-xs font-semibold px-5'>Deliver to</p>
                <div className='flex mt-[-0.2rem]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <p className='text-sm font-bold text-[#fff]'>Egypt</p>
                </div>
            </div>
            <div className='hidden md:flex items-center  flex-grow rounded-md '>
                <div className='h-10 p-4 flex items-center hover:cursor-pointer bg-[#e6e6e6] rounded-l-md w-12 px-3 hover:bg-[#e6e6e6c9]'> <div className='flex items-center '><span className='text-xs text-[#68605a]'>All </span> <ArrowDropDownIcon className="text-[#68605a] w-4 ml-1"></ArrowDropDownIcon></div> </div>
                <input type="text" className='h-10 flex-grow px-2 pb-1' placeholder='Search Amazon'/>
                <div className='h-10 p-4 flex items-center hover:cursor-pointer bg-[#febd69]  hover:bg-[#f5aa47] rounded-r-md'><SearchIcon className='h-[1.5rem]'></SearchIcon></div>

            
            </div>
            <div className='text-white text-xs md:text-sm flex items-center space-x-1 mx-4'>
                <div className='hidden lg:flex items-center space-x-1 text-[#fff] link '>
                    <Image src={image2}  className='w-[20px] h-[15px]' alt='USA'></Image>
                    <p className='font-bold text-sm'>EN <ArrowDropDownIcon className='w-fit text-lg text-[#e6e6e6] ml-[-0.2rem] mt-[0.1rem]'></ArrowDropDownIcon></p>
                    
                </div>
                <div  className="link ">
                    <p className='text-xs'>Hello, Mohamed</p>
                    <p className='font-extrabold mt-[-0.2rem]'>Accounts & Lists <ArrowDropDownIcon className='w-4 text-[#e6e6e6] ml-[-0.2rem]'></ArrowDropDownIcon></p>
                </div>
                <div className="link w-fit">
                    <p className='text-xs'>Returns</p>
                    <p className='font-bold mt-[-0.2rem] w-fit'>& Orders</p>
                </div>
                <div className='flex items-center link relative'>
                    <span className='absolute top-0 right-0 bg-[#f08804] rounded-full font-bold text-center px-1 md:right-5'>4</span>
                    <ShoppingCartIcon className='w-9'></ShoppingCartIcon>
                    <p className='font-bold hidden sm:block mt-3'>Cart</p>
                </div>
            </div>
        </div> 
        <div className='bg-[#232f3e] text-[#fff] h-[5.7vh] flex items-center px-3 text-xs md:text-sm font-semibold'>
            <ul className='flex w-full items-center space-x-3'>
                <li className='flex items-center'><MenuIcon className='w-6'></MenuIcon>All</li>
                <li  >Today's Deals</li>
                <li  >Customer Service</li>
                <li >Registry</li>
                <li className='hidden sm:inline-flex'>Gift Cards</li>
                <li className='hidden sm:inline-flex'>Sell</li>
            </ul>
        </div>
      
    </header>
  )
}

export default Header
