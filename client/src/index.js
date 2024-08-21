import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Toaster} from "react-hot-toast";   // This is component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
{/* the Toaster here is component Used to pop up masg when data inserted successfully*/}
    <Toaster/>       
  </React.StrictMode>
);

