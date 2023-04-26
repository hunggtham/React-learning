import axios from 'axios';

console.log(process.env.REACT_APP_SERVER_URL);

// https://axios-http.com/docs/instance
const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,

});



//source: https://axios-http.com/docs/interceptors
// Add a request interceptor: gửi data lên server
axios.interceptors.request.use(function (config) {
    //handle làm gì trước khi gửi lên sever: lấy token, gán acess token cho header
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error, handle lỗi
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    //chạy khi nhận được response từ sever trả về, mới nhân được dữ liệu,chưa gửi về client, sau khi xử lý sẽ gửi về cho client
    //thường là refresh lỗi (nếu lỗi 404 token ->viết hàm gửi api làm mới token gửi đi, người dùng không cần làm gì hết)
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default instance;