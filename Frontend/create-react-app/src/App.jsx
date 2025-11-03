import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Consulta from './Consulta.jsx'
import Denuncia from './Denuncia.jsx'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Consulta" element={<Consulta />} />
          <Route path="/Denuncia" element={<Denuncia />} />
        </Routes>
      </main>

      <Footer />

    </div>
  )
}






export default App