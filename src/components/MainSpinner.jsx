import React from 'react'
import { PuffLoader } from 'react-spinners';

export const MainSpinner = () => {
  return (
    <div className='w-screen h-screen flex items-centerjustify-center'>
        <PuffLoader color='#498FCD' size={80} />
    </div>
  );
};

export default MainSpinner; 