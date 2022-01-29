import React, { useEffect, useState } from 'react';

const OrderPicture = (props) => {

    const { orders } = props;
    console.log("orders pic: ", orders);


    return (
        <div>
            <h5>Price: $ {orders[0].price}</h5>
            <img className="w-50" src="https://i.ibb.co/YPwBmbt/rsz-1rsz-1kisspng-milo-chocolate-milk-coffee-goat-milk-milo-5b35bf811fe6482087426415302490891307.png" alt="" />
        </div>
    );
};

export default OrderPicture;