import { Button } from 'antd'
import React from 'react'
import { ClearOutlined ,PlusCircleOutlined,MinusCircleOutlined} from '@ant-design/icons';
const CartTotals = () => {
    return (
        <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
            <h2 className='bg-slate-800 text-center py-4 text-white font-bold tracking-wide'>Sepetteki Ürünler</h2>


            <ul className="cart-items px-2 flex flex-col gap-y-3 overflow-y-auto py-2">
                <li className="cart-item flex justify-between">
                    <div className='flex items-center gap-2'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVXcCk4B-A-LE6dXCxDdASWe12_Ode7M8QxA&usqp=CAU" alt="" className='w-16 h-16 object-cover' />
                        <div className='flex flex-col ml-2'>
                            <b>Ayakkabı</b>
                            <span>2000₺ x 2</span>
                        </div>

                    </div>
<div className='flex items-center'>
<Button  type='primary' size='small' className='w-full !rounded-full' icon={<PlusCircleOutlined />} danger></Button>
<span className=''>1</span>
<Button  type='primary' size='small' className='w-full !rounded-full' icon={<MinusCircleOutlined />} danger></Button>


</div>

                </li>

            </ul>
            <div className="cart-totals mt-auto">
                <div className='border-t border-b'>
                    <div className='flex justify-between p-2'>
                        <b>Ara Toplam</b>
                        <span>99₺</span>
                    </div>
                    <div className='flex justify-between p-2'>
                        <b>KDV %8</b>
                        <span className='text-red-700'>+7.92₺</span>
                    </div>
                </div>

                <div className='border-b mt-4'>
                    <div className='flex justify-between p-2'>
                        <b className='text-lg text-green-600'>Genel Toplam</b>
                        <span className='text-xl'>99₺</span>
                    </div>

                </div>

                <div className='py-4 px-2'>

                    <Button type='primary' size='large' className='w-full'>Sipariş Oluştur</Button>
                    <Button type='primary' size='large' className='w-full mt-2' icon={<ClearOutlined />} danger>Temizle</Button>

                </div>
            </div>
        </div>
    )
}

export default CartTotals