import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import SubCategory from './SubCategory'
import CartPage from './CartPage'
import { useDispatch } from 'react-redux'
import { clearCart } from "../utilities/Redux/cartSlice.js"
import { Link } from 'react-router-dom'

//import cartImg from "./shopping-cart-removebg-preview.png"


const Cart = () => {

  const dispatch = useDispatch();

  const clearHandler = (cat) => {
    dispatch(clearCart(cat));
  };

    const cartitems = useSelector((store)=>store.cart.items)
  return (
    <div className='w-[1300px] flex justify-between items-center mx-auto -mt-14 py-20'>

    <div className='flex flex-col justify-between items-center mx-auto'>

    <div className='text-3xl text-blue-950 w-[1200px] mt-[90px] font-semibold border-b-2 p-1 mb-2 flex justify-between items-center'>
    <span>Your Cart</span>

    {cartitems.length==0 ? <div></div>:
    <div className=''>
    <button onClick={()=>clearHandler(cartitems)} className='text-sm p-2 rounded-xl bg-gray-200 text-sky-700 m-6 hover:scale-105 transition duration-600 ease-out-in'>Clear Cart</button>
    <button className='text-sm p-2 rounded-xl bg-sky-700 text-white m-6 -mr-1 hover:scale-105 transition duration-600 ease-out-in'>Checkout</button>
    
    </div>}

    </div>
    {/* <img src={cartImg}>Cart</img> */}

    <div>
    {cartitems.length==0 ?
    <div className='w-[900px] h-[600px] flex flex-col justify-center items-center'>
    
    <img src='https://cdn.pixabay.com/photo/2015/12/23/01/14/edit-1105049_1280.png' className='w-[200px] -mt-10'></img>
    <div className='text-center font-bold text-3xl text-blue-950 m-9'>Your cart is Currently Empty.</div>
    <div className='text-center font-bold text-sm text-blue-950'>Click below to Add items.</div>
    <Link to='/'><button className='text-lg px-2 py-2 rounded-xl font-semibold bg-sky-700 text-[16px] text-white m-6 -mr-1 hover:scale-105 transition duration-600 ease-out-in'>Add items</button></Link>
    </div>:
    <CartPage catdata={cartitems}></CartPage>}
    
    </div>
    </div>

    </div>

  )
}

export default Cart