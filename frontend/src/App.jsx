import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from './views/HomeView';
import CartView from './views/CartView';
import BillsView from './views/BillsView';
function App() {

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<HomeView/>}/>
  <Route path='/cart' element={<CartView/>}/>
  <Route path='/bills' element={<BillsView/>}/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
