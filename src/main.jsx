import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store   from "./app/store.jsx";
import { Provider } from "react-redux";
import AppRoutes from "./Routes/AppRoutes.jsx";
import './index.css'
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById('root')).render(
    <Provider store={store} >
        <AppRoutes />
         <ToastContainer />
    </Provider> 
);
