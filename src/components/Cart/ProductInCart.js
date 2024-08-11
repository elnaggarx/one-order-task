//PRODUCTINCART COMPONENT

//USESTATE HOOK IMPORTED
import { useState } from 'react';

//IMPORTING USEDIPATCH , HANDLEINCQUANTITY , HANDLEDECQUANTITY , REMOVEFROMCART FOR STATE MANAGEMENT
import { useDispatch } from 'react-redux';
import { handleIncQuantity,handleDecQuantity,removeFromCart } from '../../Redux/cartSlice';

const ProductInCart = (props) => {
    const dispatch = useDispatch();

    //STATE FOR THE QUANTITY OF THE PRODUCTS TO BE ORDERED
    const [quantity,setQuantity] = useState(1);

    //HANDLING CLICKING ON PLUS BUTTON
    const handleAddQuantity = ()=>{
        //LIMITING THE QUANTITY OF EACH PRODUCT , NOT TO EXCEED 5 PCS
        if(quantity+1>5){
            alert("You have reached the maximum number that you can order for this product")
        }
        //ADDING QUANTITY AND DISPATCHING THE HADLEINCQUANTITY ACTION TO BE EXCUTED
        else{
            setQuantity(quantity+1);
            dispatch(handleIncQuantity(props.product))
        }
    }
    
    //HANDLING CLICKING ON MINUS BUTTON
    const handleMinusQuantity = ()=>{
        //ON CLICKING MINUS BUTTON AND THE QUANTITY IS ONLY ONE , THE ITEM WILL BE REMOVED FROM THE CART
        if(quantity===1){
            dispatch(removeFromCart(props.product));
        }
        //ON CLICKING MINUS BUTTON , 1 IS SUBTRACTED FORM THE QUANTITY AND HANDLEDECQUANTITY IS DIPATCHED
        else{
            setQuantity(quantity-1)
            dispatch(handleDecQuantity(props.product))
        }
    }
  return (
    //FLEX CONTAINER FOR EACH ITEM IN CART
        <div className='item-flex-container'>
            <img src={props.product.image} alt="error" className='cart-image'/>

            {/*DIV FOR THE PRODUCT NUMBER AND PRICE      */}
            <div className='item-min-flex-col'>
                <h4 className='cart-pn'>PRODUCT <span>{props.product.id}</span></h4>
                <h4 className='cart-pp'>{Math.ceil(props.product.price)} EGP</h4>
            </div>
            {/*END DIV*/}

            {/*DIV FOR THE PLUS , MINUS BUTTON AND QUANTITY : HANDLEMINUSQUANTITY AND HANDLEADDQUANTITY
            FUNCTIONS ARE TRIGGERED ON CLICK */}
            <div className='add-remove-flex'>
                <button className='minus-button' onClick={handleMinusQuantity}>-</button>
                <h3 className='quantity' >{quantity}</h3>
                <button className='add-button' onClick={handleAddQuantity}>+</button>
            </div>
            {/*END DIV*/}
        </div>
    //END FLEX CONTAINER
  )
}

export default ProductInCart
