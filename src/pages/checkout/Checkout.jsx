import './Checkout.css'

import Breadcrumbs from '../../components/Breadcrumbs'
import {useCart} from '../../context/CartContext'
import {useNavigate} from 'react-router-dom'

import productImg from '../../assets/candleproduct.jpg';
function Checkout() {
    return(
        <>
            <Breadcrumbs />
            <div className="checkoutContainer">
                <div className="checkoutHeader">
                    <h1>Checkout</h1>
                    <p>Provide your shipping address and billing information and we'll get your order to you as quickly as possible.</p>
                </div>

            </div>
        </>
    )
}

export default Checkout;