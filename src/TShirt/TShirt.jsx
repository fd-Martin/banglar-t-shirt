import React from 'react';
import './TShirt.css'
const TShirt = ({tShirt,handleAddCart}) => {
    const {picture,name,price,_id}=tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <button onClick={()=>handleAddCart(tShirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;