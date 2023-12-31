import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';
const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddCart = (tShirt) => {
        const exists=cart.find(ts=>ts._id ===tShirt._id);
        if(exists){
            toast('tor koyda lage??????');
        }else{
            console.log(tShirt);
            const newCart = [...cart, tShirt];
            setCart(newCart);
        }
    }

    const handleRemoveFromCart= id=>{
        console.log(id);
        const remaining=cart.filter(ts=>ts._id !== id);
        setCart(remaining);

    }
    return (
        <div className='home-container'>
            <div className="t-shrits-container">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddCart={handleAddCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;