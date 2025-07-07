//top bar for all pages but home bc home doesnt need the little menu ico

import React, {useState, useEffect} from 'react';
import './Breadcrumbs.css'
import {Link, useLocation} from 'react-router-dom'


/*
home / shop
home / shop / {product name}
home / cart
home / cart / checkout
*/



const Breadcrumbs = ({productName}) => {

    //location
    const loc = useLocation();

    //states
    const [breadcrumb, setBreadcrumb] = useState(null);
    const [sitepath, setSitepath] = useState('');
    

    //path
    useEffect(() => {
        setSitepath(loc.pathname);
    },[]);
    
    //get product name for when it needed
    const pathParts = sitepath.split('/'); //split path at slashes

    //breadcrumbs to render depending on site path user is currently on 
    const possibleBreadcrumbs = [
        <p><Link to="/">home</Link> / shop</p>,
        <p><Link to="/">home</Link> / <Link to="/shop/">shop</Link> / {productName} </p>,
        <p><Link to="/">home</Link> / shopping cart</p>,
        <p><Link to="/">home</Link> / <Link to="/cart/">shopping cart</Link> / checkout</p> 
    ]

    const possiblePaths = [
        "/shop",
        "/shop/",
        "/cart",
        "/cart/checkout",
    ]

    //finding correct breadcrumb
    useEffect(() => {
        if (sitepath === possiblePaths[0] || sitepath === possiblePaths[1]) {
            setBreadcrumb(possibleBreadcrumbs[0]);
        } else if (sitepath.includes(possiblePaths[1])) {
            setBreadcrumb(possibleBreadcrumbs[1]);
        } else if (sitepath === possiblePaths[2]) {
            setBreadcrumb(possibleBreadcrumbs[2]);
        } else if (sitepath === possiblePaths[3]) {
            setBreadcrumb(possibleBreadcrumbs[3]);
        } else {
            setBreadcrumb(<p>{sitepath}</p>);
        }
    }, [sitepath])

    return (

        <div className="breadcrumbsContainer">
            <nav className="breadcrumbs">
                {breadcrumb}
            </nav>
        </div>
    );
    };

    export default Breadcrumbs; 