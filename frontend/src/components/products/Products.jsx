import React from 'react'

const Products = () => {
    return (
        <div className='products-wrapper grid gap-4 grid-cols-card'>
            <div className='product-item border rounded-md hover:scale-105 hover:shadow-lg cursor-pointer transition-all select-none'>
                <div className="product-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVXcCk4B-A-LE6dXCxDdASWe12_Ode7M8QxA&usqp=CAU" alt="" className='h-28 object-cover w-full border-b' />
                </div>
                <div className="product-info flex flex-col p-3">
                    <span className='font-bold'>Ayakkabı</span>
                    <span>2000₺</span>
                </div>

            </div>
            
            
            

        </div>
    )
}

export default Products