import React from 'react'
import useUser from '../hooks/useUser'
import { logo } from '../assets';
import {PuffLoader} from 'react-spinners';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
 

const Header = () => {
    const{data, isLoading, isError} = useUser();
  return (
      <header className='w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-30 bg-bgPriary z-5 gap-12 sticky top-0'>
        {/* logo */}
        <Link to={'/'}>
            <img src={logo} className='w-12 h-auto object-contain' alt=''/>
        </Link>
        {/* input */}
        <div className='flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200'>
            <input type='text' placeholder='Search here....' className='flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none'/>      
        </div>


        {/* profile section */}
        <AnimatePresence>
            {isLoading ? (
            <PuffLoader color='#498FCD' size={40}/>
            ) : (
                <React.Fragment>
                    <p>User</p>
                </React.Fragment>
            )}
        </AnimatePresence>
      </header>
  );
};

export default Header