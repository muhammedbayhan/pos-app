import { Form, Input,Button,Carousel} from 'antd'
import { Link } from "react-router-dom";
import React from 'react'
import AuthCarousel from "../../components/auth/AuthCarousel";

const RegisterView = () => {
  return (
    <div className="h-screen">
    <div className="flex justify-between h-full">
      <div className="xl:px-20 px-10 w-full flex flex-col h-full justify-center relative">
        <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
        <Form layout="vertical">
          <Form.Item
            label="Kullanıcı Adı"
            name={"username"}
            rules={[
              {
                required: true,
                message: "Boş Bırakılamaz!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="E-mail"
            name={"email"}
            rules={[
              {
                required: true,
                message: "E-mail Alanı Boş Bırakılamaz!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Şifre"
            name={"password"}
            rules={[
              {
                required: true,
                message: "Şifre Alanı Boş Bırakılamaz!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Şifre Tekrar"
            name={"passwordAgain"}
            rules={[
              {
                required: true,
                message: "Şifre Tekrar Alanı Boş Bırakılamaz!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              size="large"
            >
              Kaydol
            </Button>
          </Form.Item>
        </Form>
        <div className="flex justify-center absolute left-0 bottom-10 w-full">
          Bir hesabınız var mı?&nbsp;
          <Link to="/login" className="text-blue-600">
            Şimdi giriş yap
          </Link>
        </div>
      </div>
      <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff] h-full">
          <div className="w-full h-full flex items-center">
            <div className="w-full">
            <Carousel className="!h-full px-6" autoplay>

                <AuthCarousel
                  img="https://cdni.iconscout.com/illustration/premium/thumb/responsive-design-4439309-3728422.png?f=webp"
                  title="Responsive"
                  desc="Tüm Cihaz Boyutlarıyla Uyumluluk"
                />
                <AuthCarousel
                  img="https://cdni.iconscout.com/illustration/premium/thumb/presenting-chart-5831836-4859637.png?f=webp"
                  title="İstatistikler"
                  desc="Geniş Tutulan İstatistikler"
                />
                <AuthCarousel
                  img="https://cdni.iconscout.com/illustration/premium/thumb/customer-service-center-3483612-2912013.png"
                  title="Müşteri Memnuniyeti"
                  desc="Deneyim Sonunda Üründen Memnun Müşteriler"
                />
                <AuthCarousel
                  img="https://cdni.iconscout.com/illustration/premium/thumb/admin-manage-online-dashboard-with-laptop-1886528-1597939.png?f=webp"
                  title="Yönetici Paneli"
                  desc="Tek Yerden Yönetim"
                />
              </Carousel>
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default RegisterView