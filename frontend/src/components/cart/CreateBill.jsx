import React from 'react'
import { Form, Modal, Input,Select,Card,Button } from 'antd'
const CreateBill = ({ isModalOpen, setIsModalOpen }) => {

    const onFinish=(value)=>{
        console.log("onfinish",value);
    }


    return (
        <div>
            <Modal title="Fatura Oluştur" open={isModalOpen} footer={false} onCancel={() => setIsModalOpen(false)}>

                <Form layout={'vertical'} onFinish={onFinish}>
                    <Form.Item name={"customerName"} label="Müşteri Adı" rules={[{ required: true,message:"Boş alan bırakılamaz" }]}>
                        <Input placeholder="Müşteri Adı" />
                    </Form.Item>
                    <Form.Item name={"customerPhone"} label="Telefon Numarası" rules={[{ required: true,message:"Boş alan bırakılamaz" }]}>
                        <Input placeholder="Telefon Numarası" />
                    </Form.Item>
                    <Form.Item name={"customerPayload"} label="Ödeme Yöntemi" rules={[{ required: true,message:"Boş alan bırakılamaz" }]}>
                        <Select placeholder="Ödeme Yöntemi Seçiniz">
                            <Select.Option value="Nakit">Nakit</Select.Option>
                            <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
                        </Select>
                    </Form.Item>
                  
                    <Card className=''>
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

                        <Button size='large' className='w-full mt-2' type='primary' htmlType='submit' onClick={() => setIsModalOpen(true)}>Sipariş Oluştur</Button>
                    </Card>

               
                </Form>


            </Modal>
        </div>
    )
}

export default CreateBill