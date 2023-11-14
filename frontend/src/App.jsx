import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from './views/HomeView';
import CartView from './views/CartView';
import BillsView from './views/BillsView';
import CustomerView from './views/CustomerView';
import StatisticView from './views/StatisticView';
function App() {

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<HomeView/>}/>
  <Route path='/cart' element={<CartView/>}/>
  <Route path='/bills' element={<BillsView/>}/>
  <Route path='/customers' element={<CustomerView/>}/>
  <Route path='/statistic' element={<StatisticView/>}/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
