import React from 'react';
import {useSelector} from "react-redux";

const CounterCart = () => {
    const counter = useSelector(state => state.cart)
    return (
        <div>
            {counter.length}
        </div>
    );
};

export default CounterCart;