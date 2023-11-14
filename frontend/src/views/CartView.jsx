import { React, useState } from 'react'
import Header from '../components/Header/Header'
import { Table, Card, Button, Modal } from 'antd'
import CreateBill from '../components/cart/CreateBill';

const CartView = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    return (
        <div>
            <Header />
            <div className='px-6'>
                <Table dataSource={dataSource} columns={columns} bordered />
                <div className="cart-total flex justify-end">
                    <Card className='w-72'>
                        <div className='flex justify-between'>
                            <span>Ara Toplam</span>
                            <span>2000₺</span>
                        </div>
                        <div className='flex justify-between my-2'>
                            <span>KDV Toplam</span>
                            <span className='text-red-600'>2000₺</span>
                        </div>
                        <div className='flex justify-between font-bold'>
                            <span>Toplam</span>
                            <span>2000₺</span>
                        </div>

                        <Button size='large' className='w-full mt-2' type='primary' onClick={() => setIsModalOpen(true)}>Sipariş Oluştur</Button>
                    </Card>

                </div>
            </div>
      <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </div>
    )
}

export default CartView