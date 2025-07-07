import './Confirmation.css'
import {useNavigate} from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs'

function Confirmation() {

    const nav = useNavigate();

    return(
        <>
            <Breadcrumbs />
            <div className="confirmationContainer">
                <h1>Order Confirmed!</h1>
                <p>Thank you for shopping with us! Your order has been received and will be shipped out shortly. We will send you a receipt and tracking information via email.</p>
                <button onClick={() => nav('/')}>BACK TO HOME</button>
            </div>
        </>
    )
}

export default Confirmation;