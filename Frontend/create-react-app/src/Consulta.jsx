import React, { useState, useEffect } from "react"
import axios from 'axios'


const Consulta = () => {

  const [numero, setNumero] = useState("")
  const [consulta, setConsulta] = useState([])
  const [buscou, setBuscou] = useState(false)

  const buscarConsulta = async () => {

    try {
      const response = await axios.get(`http://localhost:5000/denuncias/numero/${numero}`)
      setConsulta(response.data ?? [])

    } catch (err) {
      console.error(err.message)
      setConsulta([])
    }
    setBuscou(true)
  }


  return (

    <div className="container mx-auto px-6 py-12 min-h-[670px]">
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
          <div key={item.id} className="flex flex-col gap-1 rounded-md bg-white mt-4 p-2 shadow-md border border-black">
            <div className="flex">
              <p className="font-semibold text-black mr-1">Número:</p>
              <p className="text-gray-600">{item.numero_telefone}</p>
            </div>

            <div className="flex">
              <p className="font-semibold text-black mr-1">Instituição:</p>
              <p className="text-gray-600">{item.instituicao}</p>
            </div>

            <div className="flex">
              <p className="font-semibold text-black mr-1">Descrição:</p>
              <p className="text-gray-600">{item.descricao}</p>
            </div>

            <div className="flex">
              <p className="font-semibold text-black mr-1">Região:</p>
              <p className="text-gray-600">{item.regiao}</p>
            </div>

            {/* <p className="font-semibold text-gray-700">Data:</p>
        <p className="text-gray-600"> {new Date(consulta[0].data_denuncia).toLocaleDateString("pt-BR")}</p> */}

          </div>
        )))}

      {buscou && consulta.length === 0 && (
        <div className="flex items-center justify-center mt-4 p-4 ">
          <p>
            Nenhuma denúncia registrada nesse número
          </p>
          <i className="fas fa-check ml-2"></i>
        </div>
      )}

    </div>


  )
}
export default Consulta
