import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home'
import Cadastro from './routes/Cadastro.jsx';
import SobreProjeto from './routes/SobreProjeto';
import Contato from './routes/Contato'
import Login from './routes/Login'


const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
        //Vira a URL padrao 
        path: "*",
        element: <Home />
      },
      {
        path: "/cadastro",
        element: <Cadastro />
      },
      {
        path: "/sobre",
        element: <SobreProjeto />
      },
      {
        path: "/contato",
        element: <Contato />
      },
      {
      path: "/LogIn",
      element: <Login />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
