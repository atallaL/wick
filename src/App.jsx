import { useState } from 'react'
import './App.css'

import Home from "./pages/home/Home"
import Cart from "./pages/cart/Cart"
import Shop from "./pages/shop/Shop"
import Confirmation from "./pages/confirmation/Confirmation"
import Checkout from "./pages/checkout/Checkout"
import Product from "./pages/product/Product"


import {Routes, Route} from 'react-router-dom'

function App() {

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/cart/confirmation" element={<Confirmation/>}/>
          <Route path="/cart/checkout" element={<Checkout/>}/>
          <Route path="/shop/:id" element={<Product/>}/>
        </Routes>
      </div>
  )
}

export default App
