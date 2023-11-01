import React from 'react'

const SubHead = () => {
  return (
    <div className='bg-slate-50 flex flex-wrap w-[1535px] justify-center'>
         <div className='sm:w-[705px] md:w-[835px] lg:w-[1535px] flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-evenly items-center '>

        <div className='w-[125px] sm:w-[200px] md:w-[200px] xl:w-[200px] 2xl:w-[200px] lg:w-[200px] flex flex-shrink'>
          <h1 className='text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold'>Order Food Online in Your Area</h1>
        </div>

        <div>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png" className='w-[200px] h-[100px] sm:w-[300px] sm:h-[150px]   lg:w-[500px] lg:h-[300px]'></img>
        </div>
      </div>
    </div>
  )
}

export default SubHead