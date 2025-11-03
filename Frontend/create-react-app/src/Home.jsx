import {Link} from 'react-router-dom'

const Home = () => (
  <div>
    {/* Hero Section */}
    <main className="container mx-auto px-6 py-12 min-h-[500px]">
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
          <Link to="/consulta" className="block">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Consultar número</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Verifique se um número possui denúncias registradas
            </p>
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <Link to="/denuncia" className="block">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Fazer denúncia</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Registre um número suspeito e ajude outras pessoas
            </p>
          </Link>
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
  </div>
)

export default Home