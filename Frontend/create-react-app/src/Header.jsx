import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className="bg-white shadow-sm border-b">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="text-3xl font-bold text-blue-800">NumSafe</Link>
                        <nav className="flex space-x-6">
                            <Link to="/" className="text-blue-700 hover:text-blue-900 font-medium transition-colors">Início</Link>
                            <Link to="/consulta" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">Consultar número</Link>
                            <Link to="/denuncia" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">Fazer denúncia</Link>
                            <Link to="/entrar">
                                <button className="text-black-1000 hover:bg-gray-100 rounded-md border border-gray-300 pr-4 pl-4">Entrar</button>
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
