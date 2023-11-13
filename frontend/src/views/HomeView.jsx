import React from 'react'
import Header from "../components/Header/Header"
import CartTotals from "../components/cart/CartTotals"
import Categories from "../components/categories/Categories"
import Products from "../components/products/Products"

const HomeView = () => {
  return (
<>
<Header/>
    <div className="home px-6 flex flex-col md:flex-row justify-between gap-10 md:pb-0 pb-24">
      <div className="categories md:pb-10  md:mr-0 -mr-[2]  overflow-auto max-h-[calc(100vh-_-112px)]">
        <Categories/>
      </div>
      <div className="products flex-[8] max-h-[calc(100vh-_-112px)] overflow-y-auto pb-10">
        <Products/>
      </div>
      <div className="cart-wrapper min-w-[300px] md:-mr-[24px]  md:-mt-[24px] md:pr-0 pr-10 border">
       <CartTotals/>
      </div>

    </div></>
  )
}

export default HomeView