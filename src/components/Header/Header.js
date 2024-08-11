//HEADER COMPONENT
import React from 'react';
//STYLESHEET FOR THE HEADER COMPONENT
import "./HeaderStyles.css";
//CART ICON TO BE DISPLAYED IN HEADER
import {ShoppingCartIcon} from "@heroicons/react/outline"
//IMPORTING USESELECTOR FOR STATE MANAGEMENT
import { useSelector } from 'react-redux';

const Header = (props) => { 
    //USE SELECTOR USED TO RETRIEVE THE PRODUCTSNUMBER STATE FROM THE STORE
    const numberOfItems = useSelector((state)=>state.cart.productsNumber)
  return (

    <header className='header'>

        {/*LOGO  (SHOP)*/}
        <h1 className='logo'>SHOP</h1>

        {/*CONTAINER FOR THE CART ICON AND NUMBER OF ITEMS INSIDE */}
        <div className='cart-container'>
            <ShoppingCartIcon className='shop-icon' onClick={()=>{props.handleOpenCart();}}></ShoppingCartIcon>
            <p className='items-in-cart'>{numberOfItems}</p>
        </div>
        {/*END CONTAINER*/}


    </header>
  )
}

export default Header
