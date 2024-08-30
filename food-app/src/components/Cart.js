import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemsList from './ItemsList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const clearcart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-4 w-[95%] mx-auto my-5">
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>
            <div className='w-6/12 mx-4'>
            <ItemsList itemCards={cartItems} />
            </div>
            { cartItems.length > 0 ?
            <div className="flex gap-72 items-center mt-4 mx-2">
                <p className="text-lg font-semibold">Total: ₹0.00</p>
                <div className='flex justify-between gap-10'>
                <button onClick={clearcart} className="bg-black text-white px-4 py-2 rounded-md">Clear Cart</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Checkout</button>
                </div>
            </div>
            : <p>Please Add Something to the Cart</p>}
        </div>
    );
};

export default Cart;