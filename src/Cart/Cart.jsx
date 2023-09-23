import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some product</p>
    } else {
        message = 
        <div>
            <h3>boroloxxxxs</h3>
            <p>thanks for wasting money</p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length ===1? 'blue':'red'}>Order Summary :{cart.length}</h2>
            <p className={`bold ${cart.length===3? 'green':'orange'}`}>Something</p>
            {message}
            {cart.length>2? <span className='green'>aro kino betta</span>: <span>fokira</span> }
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button> </p>)
            }
            {
                cart.length===2 && <p> double bananza!!!!</p>
            }
            {
                cart.length===3 || <p> tintato holo na!!!!</p>
            }
        </div>
    );
};

export default Cart;