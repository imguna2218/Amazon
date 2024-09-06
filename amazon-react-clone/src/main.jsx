import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import ShopItems from './routes/ShopItems.jsx';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import amazonStore from './store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={amazonStore}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/clothes' element={<ShopItems apiName={'./clothes'} />} />
        <Route path='/hapcare' element={<ShopItems apiName={'./hapcare'} />} />
        <Route path='/furniture' element={<ShopItems apiName={'./furniture'} />} />
        <Route path='/electronics' element={<ShopItems apiName={'./electronics'} />} />
        <Route path='/bpicks' element={<ShopItems apiName={'./bpicks'} />} />
        <Route path='/petcare' element={<ShopItems apiName={'./petcare'} />} />
        <Route path='/toys' element={<ShopItems apiName={'./toys'} />} />
        <Route path='/fashion' element={<ShopItems apiName={'./fashion'} />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
