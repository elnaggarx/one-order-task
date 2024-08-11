//PRODUCT COMPONENT
import React from 'react'
//STYLESHEET FOR PRODUCT COMPONENT
import "./ProductStyles.css"

//IMPORTING ADDTOCART ACTION AND DISPATCH FOR STATE MANAGEMENT
import { addToCart } from '../../Redux/cartSlice'
import { useDispatch } from 'react-redux'

const Product = (props) => {
    //PROPS ARE THE ATTRIBUTES OF A SINGLE ARRAY ELEMENT OF THE PRODUCTS FETCHED BY THE API
    const dispatch = useDispatch()
  return (
    //DIV FOR EACH PRODUCT
    <div className='product'>
        <img src={props.image} alt="product" className='product-image' />

        {/*DIV FOR PRODUCT DETAILS*/}
        <div className='product-text'>
            <h4 className='product-id'>PRODUCT <span className='id'>{props.id}</span></h4>
            {/*On Clicking the button the addToCart is dispatched to be excuted*/}
            <button className='add-to-cart-button' onClick={()=>{dispatch(addToCart(props))}}>ADD +</button>
            
        </div>
        {/*END DIV*/}


        <h3 className='product-price'>{Math.ceil(parseFloat(props.price))} EGP</h3>

    </div>
  )
}

export default Product
