import React from "react";
//import { Link } from "react-router-dom";
import { Link } from "react-router-dom";


const OrderSuccess = () => {
  return (
    <div className=" h-[480px] mt-[200px] ">
      <div className="bg-white p-6 md:mx-auto">
        <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
        </svg>
        <div class="text-center">
            <h3 className="md:text-2xl text-base text-blue-950 font-semibold text-center">Order Placed!</h3>
            <p className="text-blue-950 my-2">Thank you for completing your Order.</p>
            <p className='text-blue-950'> Have a great day!  </p>
            
            {/* <Link to="/orderConfirmation"> <button className="bg-sky-700 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button></Link> */}
            <Link to='/' className="py-10 text-center"> <button className="px-12 mt-8 bg-sky-700 hover:bg-sky-600 text-white font-semibold py-3">
                    View More 
               </button>       </Link>

     
        </div>
    </div>
  </div>
  )
}

export default OrderSuccess
