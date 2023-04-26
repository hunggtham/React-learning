
import axios from '../axios';


export const getHome = () => new Promise(async (resolve, reject) => {
    try {
        //base url: https://api-zing-mp3-steel.vercel.app/api/
        //dùng method get để lấy dữ liệu
        //resolve về cái respone nếu thành công, nếu xảy ra lỗi thì chạy xuống reject 
        const response = await axios({
            url: '/home',
            method: 'get'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})