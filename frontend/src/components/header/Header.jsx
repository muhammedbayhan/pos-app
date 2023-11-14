import React from 'react'
import {  SearchOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    CopyOutlined,
    UserOutlined,
    BarChartOutlined,
    LogoutOutlined} from '@ant-design/icons';
import { Badge, Input } from 'antd';
import {Link} from 'react-router-dom'

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
    <div className="menu-links flex justify-between items-center gap-8 md:static fixed z-50 bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0
    md:border-t-0 border-t md:px-0 px-4 py-1
    ">
          <Link to={"/"} className="menu-link flex flex-col items-center hover:text-blue-600 hover:scale-105">
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]  ">Ana Sayfa</span>
          </Link>
          <Badge count={5} className='md:flex hidden' >
      <Link to={"/cart"} className="menu-link flex flex-col items-center hover:text-blue-600 hover:scale-105">
            <ShoppingCartOutlined className="md:text-2xl text-xl  " />
            <span className="md:text-xs text-[10px]">Sepet</span>
          </Link>
      </Badge>
          <Link to={"/"} className="menu-link flex flex-col items-center hover:text-blue-600 hover:scale-105">
            <CopyOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Faturalar</span>
          </Link>
          <Link to={"/"} className="menu-link flex flex-col items-center hover:text-blue-600 hover:scale-105">
            <UserOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Müşteriler</span>
          </Link>
          <Link to={"/"} className="menu-link flex flex-col items-center hover:text-blue-600 hover:scale-105">
            <BarChartOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">İstatistikler</span>
          </Link>
          <Link to={"/"} className="menu-link flex flex-col items-center hover:text-blue-600 hover:scale-105">
            <LogoutOutlined  className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Çıkış</span>
          </Link>
        </div>
        <Badge count={5} className='md:hidden flex'>
      <Link to={"/"} className="menu-link flex flex-col items-center hover:text-blue-600 hover:scale-105">
            <ShoppingCartOutlined className="md:text-2xl text-xl  " />
            <span className="md:text-xs text-[10px]">Sepet</span>
          </Link>
      </Badge>
</header>

    </div>
  )
}

export default Header