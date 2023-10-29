import React from "react";
import { Link } from "react-router-dom";

const CartPage = ({ catdata }) => {
  //catdata.card.info
 const handler=()=>{
  <Link to='/orderConfirmation'></Link>
 }
  let totalPrice = 0;
  // Calculate the total price
  catdata.forEach((cat) => {
    totalPrice += cat?.card?.info?.price/ 100||cat?.card?.info?.defaultPrice / 100;
  });
  return (
    <div className="w-[1100px] flex justify-between items-start mx-auto">
      <div className="w-[400px]">
        {catdata.map((cat) => (
          <div
            key={cat?.card?.info?.id}
            className="shadow-md flex justify-between items-center  mt-5 w-[730px] bg-sky-50 h-[120px]"
          >
            <div className=" h-28 m-4 flex justify-start items-center">
              <div className="w-[80px] h-[80px] ">
                <img
                  className="h-[100%] shadow-xl rounded-lg"
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                    cat?.card?.info?.imageId
                  }
                ></img>
              </div>

              <div className="ml-7 flex flex-col">
                <div className="text-sky-950 font-bold text-lg">
                  {cat?.card?.info?.name}
                </div>
                <div className="text-sky-950 w-[500px] text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                  {cat?.card?.info?.description}
                </div>
              </div>
              <div></div>
            </div>

            {/* <div className="mt-5 w-[580px] overflow-hidden text-ellipsis whitespace-wrap">
                <span className="text-sky-800">
                  {cat?.card?.info?.description}
                </span>
              </div> */}

            <div className="mt-1 mr-5 font-semibold text-lg text-sky-950">
              <span>{cat?.card?.info?.price/ 100||cat?.card?.info?.defaultPrice / 100} ₹</span>
            </div>
          </div>
        ))}

       

        {/* <div className="text-xl text-right w-[900px] mt-14 font-semibold border-t-2 p-1 mb-14 text-sky-950">
          <span>Total Price = {totalPrice} ₹</span>
          
        </div> */}
        
      </div>

      <div className="md:w-1/4 w-[300px]">
                <div className="bg-white rounded-lg shadow-md p-6 text-blue-950">
                    <h2 className="text-lg font-semibold mb-4">Summary</h2>
                    <div className="flex justify-between mb-2">
                        <span>No of Items</span>
                        <span>{catdata.length}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>{totalPrice}.00 ₹</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>0.00₹</span>
                    </div>
                    <hr className="my-2"/>
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold">Total</span>
                        <span className="font-semibold">{totalPrice}.00 ₹</span>
                    </div>
                   <button className="bg-sky-700 text-white py-2 px-4 rounded-lg mt-4 w-full" onClick={handler}>Checkout</button>
                </div>
     </div>
    </div>
  );
};

export default CartPage;
