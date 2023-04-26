import React, { useEffect } from 'react'
import { Header, Slider } from '../../components';
import * as apis from '../../apis';
// import { AiOutlineEllipsis } from 'react-icons/ai';

const Home = () => {

    useEffect(() => {
        const fetchDataHome = async () => {
            // sử dụng await bởi hàm getHome dùng async nên phải chờ nó chạy xong thì mới chạy xuống code dưới
            const response = await apis.getHome();
            // console.log(response);
        }
        fetchDataHome()

        //tham số 2 là dependence: để mảng rỗng  : render 1 phàn khi component được mount, giống với componentdidmount, 
        //nếu có 1 dependeces(k phải mảng rỗng) nào đó thì nó sẽ là componentDidUpdate
    }, [])

    return (
        <div className='overflow-y-auto'>
            <div className='h-[70px] px-[59px] flex items-center'  >
                <Header />
            </div>
            <Slider />

        </div>
    )
}

export default Home;