import {React,useState,useEffect} from 'react'
import Header from '../components/header/Header'
import StatisticCard from '../components/statistics/StatisticCard'
import { Area,Pie } from '@ant-design/plots';
const StatisticView = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      asyncFetch();
    }, []);
    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => {
            console.log('fetch data failed', error);
          });
      };

      const data2 = [
        {
          type: '分类一',
          value: 27,
        },
        {
          type: '分类二',
          value: 25,
        },
        {
          type: '分类三',
          value: 18,
        },
        {
          type: '分类四',
          value: 15,
        },
        {
          type: '分类五',
          value: 10,
        },
        {
          type: '其他',
          value: 5,
        },
      ];
      const config2 = {
        appendPadding: 10,
        data:data2,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: {
          type: 'inner',
          offset: '-50%',
          content: '{value}',
          style: {
            textAlign: 'center',
            fontSize: 14,
          },
        },
        interactions: [
          {
            type: 'element-selected',
          },
          {
            type: 'element-active',
          },
        ],
        statistic: {
          title: false,
          content: {
            style: {
              whiteSpace: 'pre-wrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
            content: 'AntV\nG2Plot',
          },
        },
      };

      const config = {
        data,
        xField: 'timePeriod',
        yField: 'value',
        xAxis: {
          range: [0, 1],
        },
      };
    
    return (
        <>
            <Header />
            <div className='px-6  md:pb-0 pb-20'>
                <h1 className='text-4xl font-bold text-center mb-4'>İstatistikler</h1>
                <div className='istatistic-section'>
                    <h2> Hoşgeldin <span className='text-green-500 font-bold'>Admin</span></h2>
                    <div className="statistic-cards grid xl:grid-cols-4 my-10 gap-10 md:grid-cols-2 ">
                        <StatisticCard title={"Toplam Müşteri"} amount={"10"} imgUrl={"https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"} />
                        <StatisticCard title={"Toplam Kazanç"} amount={"10"} imgUrl={"https://img.freepik.com/free-vector/gold-coins-banknotes-3d-cartoon-style-icon-stack-coins-with-dollar-sign-wad-money-cash-savings-flat-vector-illustration-wealth-economy-finance-profit-currency-concept_74855-25998.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699833600&semt=ais"} />
                        <StatisticCard title={"Toplam Satış"} amount={"10"} imgUrl={"data:image/png;base64,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"} />
                        <StatisticCard title={"Toplam Ürün"} amount={"10"} imgUrl={"https://upload.wikimedia.org/wikipedia/commons/1/14/Product_sample_icon_picture.png"} />



                    </div>

                <div className='flex justify-between gap-10 lg:flex-row flex-col items-center'>
                <div className='lg:w-1/2 lg:h-full'><Area {...config} /></div>
                    <div className='lg:w-1/2 lg:h-full'> <Pie {...config2} /></div>
                </div>
                </div>
            </div>
        </>
    )
}

export default StatisticView