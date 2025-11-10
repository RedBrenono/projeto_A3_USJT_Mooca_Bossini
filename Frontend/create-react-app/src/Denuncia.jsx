const Denuncia = () => (
  <div className="container mx-auto px-6 py-12">
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-xl  mb-4">Fazer denúncia</h2>
      <p className="mb-8 text-gray-600">Preencha o formulário abaixo para registrar um número suspeito.</p>
      <p className="bg-green-100 text-green-800 p-3 rounded-full px-18">Denúncia anônima</p>
    </div>
    <div className="max-w-2xl mx-auto">
      <form action="#" className="border border-gray-300 bg-white mt-6 rounded-lg flex flex-col p-6">

        <label
          htmlFor="numero"
          className="m-1">Número de telefone *</label>
        <input
          type="text"
          id="numero"
          placeholder="(00) 00000-0000"
          className="bg-gray-200 rounded-md  m-1 pl-4 p-1" />

        <label
          htmlFor="instituicao"
          className="m-1">Instituição (opcional)</label>
        <input
          type="text"
          id="instituicao"
          placeholder="Ex: Banco X, Operadora Y"
          className="bg-gray-200 rounded-md m-1 pl-4 p-1" />

        <label
          htmlFor="descricao"
          className="m-1">Descrição *</label>
        <input
          type="text"
          id="descricao"
          placeholder="Descreva o motivo da denúncia"
          className="bg-gray-200 rounded-md m-1 pb-6 pl-4 p-1" />

        <label
          htmlFor="regiao"
          className="m-1">Região (cidade ou estado) *</label>
        <input
          type="text"
          id="regiao"
          placeholder="Ex: São Paulo - SP"
          className="bg-gray-200 rounded-md m-1 pl-4 p-1" />

        <input
          type="submit"
          value="Registrar denúncia"
          className="bg-blue-500 hover:bg-blue-600 rounded-md mx-auto p-1 mt-4 px-6" />

      </form>
      <p className="flex justify-center pt-8 text-gray-600">Campos obrigatórios são marcados com *</p>
    </div>
  </div>
)

export default Denuncia