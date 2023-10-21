import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import SubCategory from './SubCategory'

const Cart = () => {
    const cartitems = useSelector((store)=>store.cart.items)
  return (
    <div>
    <div>Cart Page</div>
    <div>
    <SubCategory catdata={cartitems}></SubCategory>
    </div>
    </div>

  )
}

export default Cart