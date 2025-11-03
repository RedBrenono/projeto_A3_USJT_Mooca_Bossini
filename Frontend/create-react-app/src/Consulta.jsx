const Consulta = () => (
  <div className="container mx-auto px-6 py-12 min-h-[692px]">
    <div className="flex flex-col items-center justify-center mb-8">
      <h2 className=" text-4xl font-bold mb-4">Consultar número</h2>
      <p>Digite o número de telefone para verificar se há denúncias registradas</p>
    </div>

    <div className="flex flex-col sm:flex-row items-center justify-start bg-gray-100 rounded-xl border border-gray-300 shadow-md p-4 gap-4">
      <input
        type="text"
        placeholder="(00) 00000-0000"
        className="flex-1 min-w-0 w-full border border-gray-300 bg-white rounded-xl pl-4 py-2 shadow-sm"
      />

      <button className="flex-shrink-0 bg-blue-600 text-white rounded-xl px-6 py-2 shadow-sm hover:bg-blue-700">
        Consultar
      </button>
    </div>
  </div>
)

export default Consulta
