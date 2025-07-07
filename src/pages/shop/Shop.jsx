import './Shop.css'
import {useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

import Breadcrumbs from '../../components/Breadcrumbs'
import productImg from '../../assets/candleproduct.jpg'

//stock inspired by AI


function Shop() {
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

    const possibleFragrances = ['wooden', 'fresh', 'spicy', 'herbal', 'citrus', 'floral', 'sweet', 'fruity']

    const nav = useNavigate();
    const loc = useLocation();

    //selected filters
    const [promo, setPromo] = useState(loc.state?.promo || false); //state passed by stuff
    const [fragrances, setFragrances] = useState([]);
    const [priceRange, setPriceRange] = useState([10,50]);

    //fragrance toggling method
    const selectFragrance = (frag) => {
        setFragrances(prev => {
            prev.includes(frag) ? //if fragrance in there already
            prev.filter (f => f !== frag) : //remove, else
            [...prev, frag]; //add it
        });
    };

    //clear all selected filters
    const clearFilters = () => {
        setPromo(false);
        setFragrances([]);
        setPriceRange([10, 50]);
    };

    //apply filters
    const filteredStock = stock.filter(item => {
        if (promo && !item.promotion) {return false}; //if promo is selected and the item has promo
        if (fragrances.length > 0 && !fragrances.some(f => item.fragrances.includes(f))) {return false}; //if a fragrance is chosen and the item has that fragrance
        if (item.price < priceRange[0] || item.price > priceRange[1]) {return false}; //if not within our price range
        return true; //item qualifies
    });

    //go to individual product page
    const handleProductPage = (id) => {
        nav(`/shop/product${id}`);
    };



    return(
        <>
            <Breadcrumbs />
            <div className="shopContainer">
                <div className="shopHeaderContainer">
                    <div className="shopHeader">
                        <h1>Shop</h1>
                        <p>Scroll through our list of available products below. Use our filter system to narrow down your search.</p>
                    </div>
                </div>
                <div className="shopSection">
                    <div className="shopFaceted">
                        <div className="shopFacetedClear" onClick={() => clearFilters()}>
                            <p>clear filters</p>
                        </div>
                        <div className="shopFacetedOptions">
                            <div className="shopFacetedSection">
                                <h2>promotion</h2>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={promo}
                                        onChange={() => setPromo(prev => !prev)}
                                    />
                                    30% off promotion
                                </label>
                            </div>
                            <div className="shopFacetedSection">
                                <h2>fragrances</h2>
                                {possibleFragrances.map(frag => (
                                    <label key={frag}>
                                        <input
                                        type="checkbox"
                                        checked={fragrances.includes(frag)}
                                        onChange={() => {
                                            setFragrances(prev =>
                                            prev.includes(frag)
                                                ? prev.filter(f => f !== frag)
                                                : [...prev, frag]
                                            );
                                        }}
                                        />
                                        {frag}
                                    </label>
                                ))}
                            </div>
                            <div className="shopFacetedSection price">
                                <h2>price</h2>
                                <label>
                                minimum $:
                                <input
                                    type="number"
                                    min={0}
                                    max={50}
                                    value={priceRange[0]}
                                    onChange={e => {
                                    const val = Number(e.target.value);
                                    setPriceRange([val, priceRange[1]]);
                                    }}
                                />
                                </label>
                                <label>
                                maximum $:
                                <input
                                    type="number"
                                    min={0}
                                    max={50}
                                    value={priceRange[1]}
                                    onChange={e => {
                                        const val = Number(e.target.value);
                                        setPriceRange([priceRange[0], val]);
                                    }}
                                />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="shopResultsContainer">
                        <div className="shopResultsHeader">
                            <h3>{filteredStock.length === stock.length ? `${filteredStock.length} results` : `${filteredStock.length} results of ${stock.length} products`}</h3>
                        </div>
                        <div className="shopResults">
                        {filteredStock.length === 0 ?
                            (<p>No products found, try removing some filters.</p>) :
                            (filteredStock.map(item => {
                                return (
                                <div className="shopProduct" key={item.id} onClick={() => handleProductPage(item.id)}>
                                    <div className="productImage">
                                        <img src={productImg} />
                                    </div>
                                    <div className="productInfo">
                                        <p>{item.name}</p>
                                        <p>${item.price}</p>
                                    </div>
                                    <div className="productDesc">
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                                );
                            }))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop;