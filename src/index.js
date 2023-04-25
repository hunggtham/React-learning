import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import reduxConfig from './redux';
import { BrowserRouter } from 'react-router-dom';


const store = reduxConfig();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // call redux 
  <Provider store={store}>
    {/* call router to SinglePageApp */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

);

