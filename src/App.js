import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import ProductsFeed from "./components/ProductsFeed/ProductsFeed";
import Cart from "./components/Cart/Cart";

function App() {
  const [products,setProducts] = useState(null);
  const [openCart , setOpenCart] =useState(false);
  const handleOpenCart=()=>{
    setOpenCart(!openCart);
  }
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((data)=>setProducts(data));
     
 },[])
  return (
    
    <div className="App">
        <Header handleOpenCart={handleOpenCart} ></Header>
        <main className="main-content">
            <ProductsFeed products={products} openCart={openCart}></ProductsFeed>
            {openCart && <Cart ></Cart>}
        </main>
    </div>
  );
}

export default App;
