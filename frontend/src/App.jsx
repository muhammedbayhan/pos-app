import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from './views/HomeView';
import CartView from './views/CartView';
function App() {

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<HomeView/>}/>
  <Route path='/cart' element={<CartView/>}/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
