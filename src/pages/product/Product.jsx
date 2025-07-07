import './Product.css'

import {useState} from 'react';
import {useCart} from '../../context/CartContext'
import {useParams, useNavigate} from 'react-router-dom'

import productImg from '../../assets/candleproduct.jpg';
import Breadcrumbs from '../../components/Breadcrumbs'

function Product() {
    const stock = [
        {
            id: 0,
            name: 'Lush Forest',
            desc: 'Wooden and fresh scented candle',
            price: 29.99,
            promotion: true,
            fragrances: ['wooden', 'fresh']
        },
        {
            id: 1,
            name: 'Spiced Amber',
            desc: 'A warm, spicy blend with notes of amber and clove',
            price: 24.99,
            promotion: false,
            fragrances: ['spicy', 'herbal']
        },
        {
            id: 2, 
            name: 'Citrus Bloom',
            desc: 'Zesty citrus with hints of orange blossom and vanilla',
            price: 24.99,
            promotion: true,
            fragrances: ['citrus', 'floral']
        },
        {
            id: 3,
            name: 'Lavender Dream',
            desc: 'Relaxing lavender blended with calming chamomile',
            price: 24.99,
            promotion: false,
            fragrances: ['floral', 'herbal']
        },
        {
            id: 4,
            name: 'Ocean Breeze',
            desc: 'Cool, refreshing marine scent with sea salt and jasmine',
            price: 24.99,
            promotion: true,
            fragrances: ['fresh']
        },
        {
            id: 5,
            name: 'Cozy Vanilla',
            desc: 'Rich vanilla bean with caramel and hints of cinnamon',
            price: 21.99,
            promotion: false,
            fragrances: ['herbal', 'sweet']
        },
        {
            id: 6,
            name: 'Autumn Spice',
            desc: 'Pumpkin spice, clove, and a touch of nutmeg',
            price: 35.99,
            promotion: true,
            fragrances: ['spicy']
        },
        {
            id: 7,
            name: 'Rainy Morning',
            desc: 'Soft linen, rain mist, and earthy moss',
            price: 32.99,
            promotion: false,
            fragrances: ['fresh']
        },
        {
            id: 8,
            name: 'Midnight Jasmine',
            desc: 'Alluring jasmine and sandalwood, perfect for evenings',
            price: 39.99,
            promotion: true,
            fragrances: ['floral', 'wooden']
        },
        {
            id: 9,
            name: 'Cocoa Comfort',
            desc: 'Cozy hot cocoa scent with hints of marshmallow',
            price: 15.99,
            promotion: false,
            fragrances: ['sweet']
        },
        {
            id: 10,
            name: 'Cinnamon Glow',
            desc: 'Warm cinnamon with hints of clove and orange zest',
            price: 27.99,
            promotion: true,
            fragrances: ['spicy', 'citrus']
        },
        {
            id: 11,
            name: 'Fresh Eucalyptus',
            desc: 'Refreshing eucalyptus mixed with mint and pine',
            price: 12.99,
            promotion: false,
            fragrances: ['fresh', 'herbal']
        },
        {
            id: 12,
            name: 'Sweet Peony',
            desc: 'Delicate floral notes of peony and rose',
            price: 12.99,
            promotion: false,
            fragrances: ['floral', 'sweet']
        },
        {
            id: 13,
            name: 'Tobacco Woods',
            desc: 'Earthy tobacco leaf combined with smoky cedarwood',
            price: 40.99,
            promotion: true,
            fragrances: ['wooden', 'spicy']
        },
        {
            id: 14,
            name: 'Berry Bliss',
            desc: 'Juicy mixed berries with a touch of vanilla cream',
            price: 40.99,
            promotion: false,
            fragrances: ['sweet', 'fruity']
        },
        {
            id: 15,
            name: 'Herbal Garden',
            desc: 'Fresh basil, sage, and rosemary bouquet',
            price: 41.99,
            promotion: true,
            fragrances: ['herbal', 'fresh']
        },
        {
            id: 16,
            name: 'Vanilla Chai',
            desc: 'Creamy vanilla with spicy chai tea notes',
            price: 15.99,
            promotion: false,
            fragrances: ['sweet', 'spicy']
        },
        {
            id: 17, 
            name: 'Coconut Lagoon',
            desc: 'Tropical coconut combined with sea breeze freshness',
            price: 21.99,
            promotion: true,
            fragrances: ['fresh', 'fruity']
        },
        {
            id: 18,
            name: 'Amber Nights',
            desc: 'Deep amber with hints of patchouli and musk',
            price: 17.99,
            promotion: false,
            fragrances: ['spicy', 'wooden']
        },
        {
            id: 19, 
            name: 'Peach Orchard',
            desc: 'Sweet ripe peach with subtle floral undertones',
            price: 30.99,
            promotion: true,
            fragrances: ['fruity', 'floral']
        }
    ];

    const {id} = useParams();

    //get item based on id
    const item = stock.find(p => p.id === parseInt(id.slice(-1)));

    const [quantity, setQuantity] = useState(1);

    //cart access
    const {addToCart} = useCart(); 
    const nav = useNavigate();

    //add to cart button handling
    const handleAddToCart = () => {
        addToCart(item, quantity);
        nav('/shop')
    }

    return(
        <>
            <Breadcrumbs productName={item.name}/>
            <div className="productContainer">
                <div className="productDisplay">
                    <div className="itemImage">
                        <img src={productImg} />
                    </div>
                    <div className="itemInfo">
                        <div className="productText">
                            <h1>{item.name}</h1>
                            <h2>{item.desc}.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas libero risus, aliquam vel convallis in, aliquet non ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc quis pharetra ipsum, sed facilisis purus. Vestibulum ac nibh eu neque mattis cursus.</p>
                        </div>
                        <div className="productInputs">
                            <h3>
                                {!item.promotion ? `$${item.price}` : 
                                    <>
                                        <span>${item.price}</span> 
                                        <span style={{textDecoration: 'line-through', opacity: 0.4, marginLeft: '30px'}}>${(item.price* 1.3).toFixed(2)}</span>
                                    </>
                                }
                            </h3>
                            
                            <p>Quantity:</p>
                            <div className="quantitySelector">
                                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity(q => q + 1)}>+</button>
                            </div>

                            <div className="productAddButton">
                                 <button onClick={handleAddToCart}>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;