import React from 'react'
import { Link } from 'react-router-dom'

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
                            <Link to="/entrar">
                                <button className="text-black hover:bg-gray-100 rounded-md border border-gray-300 pr-4 pl-4">
                                    <i className='fas fa-sign-in-alt mr-1'></i>
                                    Entrar
                                </button>
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
