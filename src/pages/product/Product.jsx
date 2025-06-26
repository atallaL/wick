import './Product.css'
import {useParams} from 'react-router-dom'

function Product() {
    const {id} = useParams();

    return(
        <div className="productContainer">
            <h1>{id} candle</h1>
        </div>
    )
}

export default Product;