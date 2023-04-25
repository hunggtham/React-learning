
//react-toastify
import { ToastContainer } from 'react-toastify';
// import { toast } from 'react-toastify';

//import {useState} from 'react';

//userSelector: get data from redux, useDispatch: bring action to redux
import { useSelector, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  //state: represent to all state save in store(reducer)
  //in all reduce:have app: appReducer
  const { test } = useSelector(state => state.app);
  console.log(test);
  return (
    <>
      <div className="text-3xl font-bold underline">Test</div>


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
