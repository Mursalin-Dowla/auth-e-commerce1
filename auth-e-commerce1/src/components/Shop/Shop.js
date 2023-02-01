import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredData } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products , setProducts] = useProducts();
    const [cart, setCart] = useState([]);
   
    useEffect(()=>{
        const storedData = getStoredData();
        const savedData =[];
        for(const id in storedData){
        const addedProduct = products.find(product=> product.id === id)
        if(addedProduct){
            const quantity = storedData[id];
            addedProduct.quantity = quantity;
            savedData.push(addedProduct);
        }
        }
        setCart(savedData);
    },[products]);

    const handleAddToCart=(product)=>{
        let newCart = [];
        const exists = cart.find(prod => prod.id ===product.id)
         if(!exists){
            product.quantity = 1;
            newCart = [...cart, product]
         }
         else{
            const rest = cart.filter(prod => prod.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
         }
        
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map((product)=> <Product 
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    />)
                }
                </div>
                <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button>Review Order </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;