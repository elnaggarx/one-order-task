//PRODUCTSFEED COMPONENT
import React from 'react'
//STYLESHEET FOR PRODUCTSFEED
import "./ProductsFeedStyles.css"

//IMPORT PRODUCT COMPONENT
import Product from './Product'

const ProductsFeed = (props) => {

  return (
    //The class determines the width of the component depending on the cart 
    <div className={props.openCart ? 'minimize-pf':'products-feed'}>
        <div className='grid-container'>


            {/*MAPPING DATA FETCHED FROM API */}


            {/*Used the slice to just to choose certain products (I didn't use the category endpoint 
            while fetching , because the women's category got only 6 items*/}
            {props.products?.slice(14,22).map((product,iterator)=>{
                return <Product title={product.title} 
                price={product.price} image={product.image}
                id={iterator+1}
                key={product.id}></Product>
            })}
            {props.products?.slice(4,6).map((product,iterator)=>{
                return <Product title={product.title} 
                price={product.price} image={product.image}
                id={iterator+1+6}
                key={product.id}></Product>
            })}
            
            {/*END OF MAPPING*/}
        </div>

    </div>
  )
}

export default ProductsFeed
