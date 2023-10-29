import React from 'react';
import footer from "./FooterRest.png";

const SubFooter = () => {
  return (
    <div className='bg-slate-50 flex justify-center mt-20'>
         <div className='w-[1535px] flex justify-evenly items-center '>
        <div>
          <img src={footer}></img>
        </div>
      </div>
    </div>
  )
}

export default SubFooter