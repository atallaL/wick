/* this component is to allow global access to cart functionalities 
without having to explicitly state it every time */

/*
items will have this structure
id: 1
name: Candle Item
description: fjkdsifjfsdkjfgfd
price: $29.99
type: Candle
attributes: ['30%', 'wooden', 'spicy']
quantity: 2
*/

import {createContext, useState, useContext} from 'react';

const CartContext = createContext(); //create the context

//create provider
//this is what will allow communication to this component for the entire app, will wrap the website
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]); //cart itself

    //method for adding item to cart
    const addToCart = (prod, quantityToAdd) => {
        setCart(prev => {
            const inCart = prev.find(p => p.id === prod.id); //if in cart already, find it and add to quantity
            if (inCart) {
                return prev.map(p => p.id === prod.id ? {...p, quantity: p.quantity + quantityToAdd} : p) //increment quantity
            };
            //if not already in cart add new item to the thingy with quantity: 1
            return [...prev, {...prod, quantity: quantityToAdd}];
        });

    };

    //method for decrementing quantity of an item
    const decrementQuantity = (prodID) => {
        setCart(prev => {
            return prev.map(p => p.id === prodID ? {...p, quantity: p.quantity - 1} : p).filter(p => p.quantity > 0); //decrement quantity and remove if quantity is 0
        });
    } 

    //method for removing item entirely from cart
    const removeFromCart = (prodID) => {
        setCart(prev => prev.filter(p => p.id !== prodID));
    }

    //method for clearing cart
    const clearCart = () => {
        setCart([]); //empty cart
    }

    //total quantity getter
    const getTotalQuantity= () => {
        return cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    return (
        <CartContext.Provider value={{cart, addToCart, decrementQuantity, removeFromCart, clearCart, getTotalQuantity}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext); //useCart hook for easy access