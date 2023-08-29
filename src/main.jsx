import React from 'react'
import './App.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Carrusel from './componentes/carrusel/Carrusel.jsx'
import Productos from './componentes/productos/Productos.jsx'
import Header from './componentes/header/Header.jsx'
import Columnas from './componentes/columna/Columnas.jsx'
import Ofertas from './componentes/ofertas/ofertas.jsx'
import Sucursal from './componentes/sucursal/Sucursal.jsx'
import Footer from './componentes/footer/Footer.jsx'
import Contact from './componentes/contact/Contact'
import Form from './componentes/form/form'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header/>
    <Carrusel/>
    <Productos/>
    <Columnas/>
    <Ofertas/>
    <Contact/>
    <Sucursal/>
    <Footer/>


  </React.StrictMode>,
)