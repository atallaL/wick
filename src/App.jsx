import { useState } from 'react'
import './App.css'

import Home from "./pages/home/Home"
import Cart from "./pages/cart/Cart"
import Shop from "./pages/shop/Shop"
import Confirmation from "./pages/confirmation/Confirmation"
import Checkout from "./pages/checkout/Checkout"
import Product from "./pages/product/Product"
import Topbar from "./components/Topbar"
import FeedbackModal from "./components/FeedbackModal"
import Discountbar from "./components/Discountbar"


import {Routes, Route} from 'react-router-dom'

function App() {

  //states
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
      <>
        <div className="App">
          {bannerVisible && <Discountbar setBannerVisible={setBannerVisible}/>}
          <Topbar bannerVisible={bannerVisible}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/cart/confirmation" element={<Confirmation/>}/>
            <Route path="/cart/checkout" element={<Checkout/>}/>
            <Route path="/shop/:id" element={<Product/>}/>
          </Routes>
          <FeedbackModal />
        </div>
      </>
  )
}

export default App
