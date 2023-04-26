
//react-toastify
import { ToastContainer } from 'react-toastify';
// import { toast } from 'react-toastify';

//import {useState} from 'react';

//userSelector: get data from redux, useDispatch: bring action to redux
import { useDispatch } from 'react-redux';


import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, Public, MyMusic } from './container/public';
import path from './ultis/path';

import { useEffect } from 'react';
import * as actions from './store/actions'
function App() {
  //state: represent to all state save in store(reducer)
  //in all reduce:have app: appReducer
  // const { test } = useSelector(state => state.app);
  // console.log(test);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.getHome())
  }, [])
  return (
    <>
      <div className=''>
        <Routes>
          {/* /*: cho tất cả page */}
          <Route path={path.PULIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.LOGIN} element={<Login />} />
            <Route path={path.MY_MUSIC} element={<MyMusic />} />

            <Route path={path.STAR} element={<Home />} />
          </Route>
        </Routes>
      </div>



      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
