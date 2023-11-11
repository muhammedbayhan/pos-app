import React from 'react'
import {  SearchOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    CopyOutlined,
    UserOutlined,
    BarChartOutlined,
    LogoutOutlined} from '@ant-design/icons';
import { Badge, Input } from 'antd';

const Header = () => {
  return (
    <div className='border-b mb-6'>


<header className='py-4 px-6 flex justify-between items-center gap-10'>
    <div className="logo">
        <h2  className='text-2xl font-bold md:text-4xl'>LOGO</h2>
    </div>

    <div className="header-search flex-1">

    <Input className='rounded-full max-w-[800px]' size="large" placeholder="Ürün Ara..." prefix={<SearchOutlined />} />

    </div>
    <div className="menu-links flex justify-between items-center gap-8 md:static fixed bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0
    md:border-t-0 border-t md:px-0 px-4 py-1
    ">
          <a href={"/"} className="menu-link flex flex-col items-center hover:text-blue-600 hover:scale-105">
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]  ">Ana Sayfa</span>
          </a>
          <Badge count={5} className='md:flex hidden' >
      <a href={"/"} className="menu-link flex flex-col items-center hover:text-blue-600 hover:scale-105">
            <ShoppingCartOutlined className="md:text-2xl text-xl  " />
            <span className="md:text-xs text-[10px]">Sepet</span>
          </a>
      </Badge>
          <a href={"/"} className="menu-link flex flex-col items-center hover:text-blue-600 hover:scale-105">
            <CopyOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Faturalar</span>
          </a>
          <a href={"/"} className="menu-link flex flex-col items-center hover:text-blue-600 hover:scale-105">
            <UserOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Müşteriler</span>
          </a>
          <a href={"/"} className="menu-link flex flex-col items-center hover:text-blue-600 hover:scale-105">
            <BarChartOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">İstatistikler</span>
          </a>
          <a href={"/"} className="menu-link flex flex-col items-center hover:text-blue-600 hover:scale-105">
            <LogoutOutlined  className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Çıkış</span>
          </a>
        </div>
        <Badge count={5} className='md:hidden flex'>
      <a href={"/"} className="menu-link flex flex-col items-center hover:text-blue-600 hover:scale-105">
            <ShoppingCartOutlined className="md:text-2xl text-xl  " />
            <span className="md:text-xs text-[10px]">Sepet</span>
          </a>
      </Badge>
</header>

    </div>
  )
}

export default Header