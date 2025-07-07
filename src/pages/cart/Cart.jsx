import './Cart.css'

import Breadcrumbs from '../../components/Breadcrumbs'
import {useCart} from '../../context/CartContext'
import {useNavigate} from 'react-router-dom'

import productImg from '../../assets/candleproduct.jpg';


function Cart() {

    const {cart, addToCart, removeFromCart, decrementQuantity} = useCart();
    const nav = useNavigate();

    //calc subtotal
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return(
        <>
            <Breadcrumbs />
            <div className="cartContainer">
                <div className="cartHeader">
                    <h1>Shopping Cart</h1>
                    {cart.length === 0 ? <p>Your shopping cart is empty.</p> : <p>Review your chosen items and make adjustments as needed.</p>}
                </div>
                {cart.length === 0 ? null :
                (<div className='cartContent'>
                    <div className="cartItems">
                        {cart.map(item => (
                            <div className="cartItem" key={item.id}>
                                <img src={productImg} />
                                <div className="cartItemInfo">
                                    <div>
                                        <div className="cartItemSection">
                                            <p className="cartItemName">{item.name}</p>
                                            <p className="cartItemPrice">${item.price}</p>
                                        </div>
                                        <div className="cartItemSection">
                                            <p className="cartItemDesc">{item.desc}</p>
                                            <p className="cartItemQuantity">
                                                <button onClick={() => decrementQuantity(item.id)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => addToCart(item, 1)}>+</button>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="cartRemove" onClick={() => removeFromCart(item.id)}>
                                        <p>remove item</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cartSubtotalSection">
                        <div>
                            <div className="cartSubtotalPart">
                                <p>Subtotal:</p>
                                <p>${subtotal.toFixed(2)}</p>
                            </div>
                            <div className="cartSubtotalPart">
                                <p>Estimated shipping:</p>
                                <p>$9.99</p>
                            </div>
                            <div className="cartSubtotalPart total">
                                <p>Estimated total:</p>
                                <p>${(subtotal + 9.99).toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="checkoutButton">
                            <button onClick={() => nav('/cart/checkout')}>CHECKOUT</button>
                        </div>
                    </div>
                </div>)
                }
                <div className="continueShoppingButton">
                    <button onClick={() => nav('/shop')}>CONTINUE SHOPPING</button>
                </div>
            </div>
         </>
    )
}

export default Cart;