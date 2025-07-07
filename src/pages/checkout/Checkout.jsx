import './Checkout.css'

import Breadcrumbs from '../../components/Breadcrumbs'
import {useCart} from '../../context/CartContext'
import {useNavigate} from 'react-router-dom'

import productImg from '../../assets/candleproduct.jpg';
function Checkout() {

    const nav = useNavigate();
    const {clearCart} = useCart();

    const handleSubmit = () => {
        clearCart();
        nav('/cart/confirmation');
    }

    return(
        <>
            <Breadcrumbs />
            <div className="checkoutContainer">
                <div className="checkoutHeader">
                    <h1>Checkout</h1>
                    <p>Provide your shipping address and billing information and we'll get your order to you as quickly as possible.</p>
                </div>
                <form className="checkoutForm">
                    <div className="checkoutSection">
                        <h2>Shipping</h2>
                        <input type="text" placeholder="First Name" required />
                        <input type="text" placeholder="Last Name" required />
                        <input type="text" placeholder="Province" required />
                        <input type="text" placeholder="City" required />
                        <input type="text" placeholder="Postal Code" required />
                        <input type="email" placeholder="Email Address" required />
                    </div>

                    <div className="checkoutSection">
                        <h2>Billing</h2>
                        <input type="text" placeholder="Card Number" required />
                        <input type="text" placeholder="Expiration Month (MM)" required />
                        <input type="text" placeholder="Expiration Year (YYYY)" required />
                        <input type="text" placeholder="Security Code (CVV)" required />
                    </div>

                    <button type="submit" className="checkoutSubmit" onClick={handleSubmit}>SUBMIT ORDER</button>
                </form>
            </div>
        </>
    )
}

export default Checkout;