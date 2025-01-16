import React, { useState } from 'react';
import { ImMinus, ImPlus } from "react-icons/im";

function ProductQuantity(){
    const [quantity, setQuantity] = useState(0);
     // Handler to increase quantity
     const increase = () => {
        if(quantity < 10){
            setQuantity(quantity + 1);
        }
    };

    // Handler to decrease quantity
    const decrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
           <z> <ImMinus onClick={decrease} /></z>
            <span>{quantity}</span>
            <z><ImPlus onClick={increase} /></z>
        </div>
    );

}
export default ProductQuantity;