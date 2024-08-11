//CART COMPONENT

//STYLESHEET FOR CART COMPONENT
import "./CartStyles.css";

//IMPORTING USESELECTOR,CLEARCART,USEDISPATCH FOR STATE MANAGEMENT
import { useSelector } from 'react-redux';
import { clearCart } from '../../Redux/cartSlice';
import { useDispatch } from 'react-redux';
//IMPORING PRODUCTINCART COMPONENT
import ProductInCart from './ProductInCart';

const Cart = () => {

    //USING USESELECTOR TO RETRIEVE THE STATE NEEDED FROM THE STORE
    const products = useSelector((state)=>state.cart.products);
    const totalPrice = useSelector((state)=>state.cart.totalPrice);

    const dispatch = useDispatch();

 
  return (
    <div className='cart hide-cart'>

        {/*DIV FOR THE TITLE AND CLEAR BUTTON */}
        <div className='title-flex-container'>
            <h1>ITEMS</h1>
            {/*ONCLICK CLEAR CLEARCART ACTION IS DISPATCHED TO BE EXCUTED   */}
            <button className='clear-button' onClick={()=>dispatch(clearCart())}>CLEAR</button>
        </div>
        {/*END DIV*/}

        {/*FLEX CONTAINER FOR ALL PRODUCTS IN CART*/}
        <div className='items-flex'>
            {/*MAPPING DATE FROM THE PRODUCTS STATE AVAILABLE IN THE STORE   */}
            {products.map((product)=>{
                return <ProductInCart product={product} key={product.id} ></ProductInCart>
            })}
            {/*END MAPPING  */}
        </div>
        {/*END FLEX CONTAINER */}
        
        {/*SHOWING THE TOTALPRICE STATE AVAILABLE INSIDE THE STORE    */}
        <button className='purchase-button'>PAY {totalPrice} EGP</button>
 
    </div>
  )
}

export default Cart
