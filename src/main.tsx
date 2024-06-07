import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Footer from './Pages/Footer'
import Header from './Pages/Header'
import Button from './Pages/Button'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
      <Button />
    <Footer />
  </React.StrictMode>,
)
