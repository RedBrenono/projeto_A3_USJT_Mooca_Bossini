import React, { useState } from 'react'
import axios from "axios"


const Denuncia = () => {

  const [numero_telefone, setNumeroTelefone] = useState('')
  const [instituicao, setInstituicao] = useState('')
  const [descricao, setDescricao] = useState('')
  const [regiao, setRegiao] = useState('')

  const onSubmitForm = async (event) => {
    event.preventDefault()
    try {
      const body = { numero_telefone, instituicao, descricao, regiao }
      const response = await axios.post("http://localhost:5000/denuncias",
        { numero_telefone, instituicao, descricao, regiao })
      window.location = "/Denuncia"
      
    } catch (err) {
      console.error(err.message);

    }
  }


  return (
    <>
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-center">
          <i className='fas fa-exclamation-triangle fa-2x fa-width-auto rounded-full p-3 bg-orange-200 mb-3'></i>
          <h2 className="text-xl  mb-4">Fazer denúncia</h2>
          <p className="mb-8 text-gray-600">Preencha o formulário abaixo para registrar um número suspeito.</p>
          <p className="bg-green-100 text-green-800 p-3 rounded-full px-18">
            <i className='fas fa-user-secret mr-2'></i>
            Denúncia anônima</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form className="border border-gray-300 bg-white mt-6 rounded-lg flex flex-col p-6"
            onSubmit={onSubmitForm} >

            <label
              htmlFor="numero"
              className="m-1">Número de telefone *</label>
            <input
              type="text"
              id="numero"
              placeholder="(00) 00000-0000"
              className="bg-gray-200 rounded-md  m-1 pl-4 p-1"
              value={numero_telefone}
              onChange={e => setNumeroTelefone(e.target.value)} />

            <label
              htmlFor="instituicao"
              className="m-1">Instituição (opcional)</label>
            <input
              type="text"
              id="instituicao"
              placeholder="Ex: Banco X, Operadora Y"
              className="bg-gray-200 rounded-md m-1 pl-4 p-1"
              value={instituicao}
              onChange={e => setInstituicao(e.target.value)} />

            <label
              htmlFor="descricao"
              className="m-1">Descrição *</label>
            <input
              type="text"
              id="descricao"
              placeholder="Descreva o motivo da denúncia"
              className="bg-gray-200 rounded-md m-1 pb-6 pl-4 p-1"
              value={descricao}
              onChange={e => setDescricao(e.target.value)} />

            <label
              htmlFor="regiao"
              className="m-1">Região (cidade ou estado) *</label>
            <input
              type="text"
              id="regiao"
              placeholder="Ex: São Paulo - SP"
              className="bg-gray-200 rounded-md m-1 pl-4 p-1"
              value={regiao}
              onChange={e => setRegiao(e.target.value)} />

            <button type='submit' className="bg-blue-500 hover:bg-blue-600 rounded-md  p-1 mt-4 px-6">
              Registrar denúncia
            </button>

          </form>
          <p className="flex justify-center pt-8 text-gray-600">Campos obrigatórios são marcados com *</p>
        </div>
      </div>
    </>
  )
}

export default Denuncia