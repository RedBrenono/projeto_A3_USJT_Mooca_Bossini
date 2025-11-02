import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#inicio" className='text-3xl font-bold text-blue-800'>NumSafe</a>
            <nav className="flex space-x-6">
              <a href="#inicio" className="text-blue-700 hover:text-blue-900 font-medium transition-colors">
                Início
              </a>
              <a href="#consultar" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">
                Consultar número
              </a>
              <a href="#denunciar" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">
                Fazer denúncia
              </a>
              <a href="#Entrar"><button className='text-black-1000 hover:bg-gray-100 rounded-md border border-gray-300 pr-4 pl-4'>Entrar</button></a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Denuncie números suspeitos e ajude a comunidade a se proteger de golpes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            O NumSafe é uma plataforma colaborativa onde você pode consultar números
            denunciados e registrar suas próprias experiências com números suspeitos.
          </p>
        </section>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <a href="#consultar">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Consultar número</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Verifique se um número possui denúncias registradas
              </p>
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <a href="#denunciar">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Fazer denúncia</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Registre um número suspeito e ajude outras pessoas
              </p>
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
            <div className="text-gray-600 font-medium">Números denunciados</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
            <div className="text-gray-600 font-medium">Denúncias registradas</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
            <div className="text-gray-600 font-medium">Usuários satisfeitos</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg">© 2025 Numsafe. Todos os direitos reservados.</p>
          <p className="mt-2 text-gray-300">Contato: contato@numsafe.com.br</p>
        </div>
      </footer>
    </div>
  );
};

export default App;