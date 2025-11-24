import React, {useState, useEffect} from "react"
import axios from 'axios'


const Consulta = () => {

  const [numero, setNumero] = useState("")
  const [consulta, setConsulta] = useState([])

  const buscarConsulta = async () => {

    try {
      const response = await axios.get(`http://localhost:5000/denuncias/numero/${numero}`)
      setConsulta(response.data ??[])  
      

    } catch (err) {
      console.error(err.message)
      setConsulta([])
    }}
  

  return (

    <div className="container mx-auto px-6 py-12 min-h-[647px]">
      <div className="flex flex-col items-center justify-center mb-8">
        <h2 className=" text-4xl font-bold mb-4">Consultar número</h2>
        <p>Digite o número de telefone para verificar se há denúncias registradas</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-start bg-gray-100 rounded-xl border border-gray-300 shadow-md p-4 gap-4">
        <input
          value={numero}
          onChange={e => setNumero(e.target.value)}
          type="text"
          placeholder="(00) 00000-0000"
          className="flex-1 min-w-0 w-full border border-gray-300 bg-white rounded-xl pl-4 py-2 shadow-sm"
        />

        <button onClick={buscarConsulta} className="flex-shrink-0 bg-blue-600 text-white rounded-xl px-5 py-2 shadow-sm hover:bg-blue-700">
          <i className='fas fa-search mr-2'></i>
          Consultar
        </button>
      </div>

      {consulta.length > 0 && (
        consulta.map((item) => (
      <div key={item.id} className="grid grid-cols-2 gap-3 rounded-xl bg-white mt-4 p-2 shadow-md border border-gray-300">

        <p className="font-semibold text-gray-700">Número:</p>
        <p className="text-gray-600">{item.numero_telefone}</p>

        <p className="font-semibold text-gray-700">Instituição:</p>
        <p className="text-gray-600">{item.instituicao}</p>

        <p className="font-semibold text-gray-700">Descrição:</p>
        <p className="text-gray-600">{item.descricao}</p>

        <p className="font-semibold text-gray-700">Região:</p>
        <p className="text-gray-600">{item.regiao}</p>

        {/* <p className="font-semibold text-gray-700">Data:</p>
        <p className="text-gray-600"> {new Date(consulta[0].data_denuncia).toLocaleDateString("pt-BR")}</p> */}

      </div>
      )))}

    </div>


  )
}
export default Consulta
