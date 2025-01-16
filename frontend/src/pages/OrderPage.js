//import React, { useState } from 'react';
import ProductRow from '../components/ProductRow.js';  
import products from '../data/products';
function OrderPage(){
    return (
        <>
            <h2>Order</h2>
            <article>
                <h3>What would you like to order?</h3>
                <p>Here, you may order animal related products. </p>
                <form action="/order-placed" method="POST">
                    <fieldset>
                        <legend>Products For Sale</legend>
                        <p>You may only select <strong>one</strong> at a time.</p>
                        <table>
                            <caption>Products</caption>
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                            {products.map((product, index) => (<ProductRow product={product} key={index} />))}
                            </tbody>
                        </table>
                    </fieldset>
                </form>
            </article>
        </>
    );
}

export default OrderPage; 
