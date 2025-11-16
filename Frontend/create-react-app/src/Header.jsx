import React from 'react'
import { Link } from 'react-router-dom'
import Entrar from './Entrar.jsx'

const Header = () => {
    return (
        <>
            <header className="bg-white shadow-sm border-b">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="text-2xl font-bold text-blue-800 mr-4">
                            <i className='fas fa-shield-alt fa-x fa-width-auto rounded-xl p-1 bg-blue-200'></i>
                            NumSafe
                        </Link>
                        <nav className="flex space-x-6">
                            <Link to="/" className=" text-gray-600 hover:text-blue-700 font-medium transition-colors">Início</Link>
                            <Link to="/consulta" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">Consultar número</Link>
                            <Link to="/denuncia" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">Fazer denúncia</Link>
                            <Entrar />
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
