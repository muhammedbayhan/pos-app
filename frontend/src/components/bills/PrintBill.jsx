import React from 'react'
import { Modal, Button } from 'antd'
const PrintBill = ({ isModalOpen, setIsModalOpen }) => {



    return (
        <div>
            <Modal title="Fatura Yazdır" open={isModalOpen} footer={false} width={800} onCancel={() => setIsModalOpen(false)}>

                <section className="py-20 bg-black">
                    <div className="max-w-5xl mx-auto bg-white px-6">
                        <article className="overflow-hidden">
                            <div className="logo my-6">
                                <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
                            </div>
                            <div className="bill-details">
                                <div className="grid grid-cols-4 gap-12  sm:grid-cols-4 grid-cols-3">
                                    <div className="text-md text-slate-500">
                                        <p className="font-bold text-slate-700">Fatura Detayı:</p>
                                        <p>Lorem</p>
                                        <p> Lorem, ipsum dolor.</p>
                                        <p>Lorem, ipsum. </p>
                                        <p> Lorem, ipsum.</p>
                                    </div>
                                    <div className="text-md text-slate-500">
                                        <p className="font-bold text-slate-700">Fatura:</p>
                                        Lorem, ipsum dolor.
                                        <p> Lorem, ipsum dolor.7</p>
                                        <p> Lorem </p>
                                        <p> Lorem, ipsum.</p>
                                    </div>
                                    <div className="text-md text-slate-500">
                                        <div>
                                            <p className="font-bold text-slate-700">Fatura numarası:</p>
                                            <p>Lorem</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-700 mt-2">
                                                Tarih:
                                            </p>
                                            <p>2023-01-01</p>
                                        </div>
                                    </div>
                                    <div className="text-md text-slate-500 sm:block hidden">
                                        <div>
                                            <p className="font-bold text-slate-700">Şartlar</p>
                                            <p>Lorem</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-700 mt-2">Vade</p>
                                            <p>2023-09-09</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bill-table-area mt-8">
                                <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                                    <thead>
                                        <tr className="border-b border-slate-200">
                                            <th
                                                scope="col"
                                                className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"                                            >
                                                Görsel
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                                            >
                                                {" "}
                                                Başlık
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:hidden"
                                            >
                                                Fiyat
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 text-center text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                                            >
                                                Adet
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 text-end text-sm font-normal text-slate-700 md:pl-0"
                                            >
                                                Toplam
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-slate-200">
                                            <td className="py-4 sm:table-cell hidden">
                                                <img
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVXcCk4B-A-LE6dXCxDdASWe12_Ode7M8QxA&usqp=CAU"
                                                    alt=""
                                                    className="w-12 h-12 object-cover"
                                                />
                                            </td>
                                            <td className="py-4 sm:table-cell hidden">
                                                <div className="flex flex-col">
                                                    <span className="font-medium">Şalgam</span>
                                                    <span className="sm:hidden inline-block text-xs">
                                                        Birim Fiyatı 5₺
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="py-4 sm:hidden" colSpan={4}>
                                                <div className="flex flex-col">
                                                    <span className="font-medium">Şalgam</span>
                                                    <span className="sm:hidden inline-block text-xs">
                                                        Birim Fiyatı 5₺
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="py-4 text-center sm:table-cell hidden">
                                                <span>5₺</span>
                                            </td>
                                            <td className="py-4 text-center">
                                                <span>1</span>
                                            </td>
                                            <td className="py-4 sm:text-center text-right sm:table-cell hidden">
                                                <span>5.00₺</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th
                                                className="text-right pt-4 sm:table-cell hidden"
                                                colSpan="4"
                                                scope="row"
                                            >                                                <span className="font-normal text-slate-700">
                                                    Ara Toplam
                                                </span>
                                            </th>
                                            <th className="text-right pt-4" scope="row">
                                                <span className="font-normal text-slate-700">61₺</span>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className="text-right pt-4" colSpan="4" scope="row">
                                                <span className="font-normal text-slate-700">KDV</span>
                                            </th>
                                            <th className="text-right pt-4" scope="row">
                                                <span className="font-normal text-red-600">+4.88₺</span>
                                            </th>
                                        </tr>
                                        <tr>
                                        <th
                      className="text-right pt-4 sm:table-cell hidden"
                      colSpan="4"
                      scope="row"
                    >
                      <span className="font-normal text-slate-700">Genel Toplam</span>
                    </th>
                    <th
                      className="text-left pt-4 sm:hidden"
                      scope="row"
                      colSpan="4"
                    >
                      <p className="font-normal text-slate-700">Genel Toplam</p>
                                            </th>
                                            <th className="text-right pt-4" scope="row">
                                                <span className="font-normal text-slate-700">65.88₺</span>
                                            </th>
                                        </tr>
                                    </tfoot>
                                </table>
                                <div className="py-9">
                                    <div className="border-t pt-9 border-slate-200">
                                        <p className="text-sm font-light text-slate-700">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Minima maxime necessitatibus illum aspernatur, ex deleniti
                                            eos commodi corporis mollitia perspiciatis quo nihil tempora
                                            natus explicabo odio eveniet alias voluptatem obcaecati?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
                <Button type="primary" size="large">
          Yazdır
        </Button>

            </Modal>
        </div>
    )
}

export default PrintBill