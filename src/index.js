import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/HomePage';
import DashBoard from './components/Admin/Content/DashBoard';
import UserManage from './components/Admin/Content/UserManage';
import QuestionManage from './components/Admin/Content/QuestionManage';
import QuizManage from './components/Admin/Content/QuizManage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<HomePage />} />
          <Route path="users" element={<User />} />
        </Route>
        {/* cho ra ngoài để dùng header khác với trang home */}
        <Route path="/admins" element={<Admin />}>
          <Route index element={<DashBoard />} />

          <Route path="user-manage" element={<UserManage />} />
          <Route path="quiz-manage" element={<QuizManage />} />
          <Route path="ques-manage" element={<QuestionManage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
