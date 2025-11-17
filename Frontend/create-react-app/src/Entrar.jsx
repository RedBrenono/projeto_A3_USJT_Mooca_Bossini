import React, { useState } from 'react'

const Entrar = () => {
  const [showModal, setShowModal] = useState(false)
  const [tab, setTab] = useState("login")

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="text-black hover:bg-gray-100 rounded-md border border-gray-300 pr-4 pl-4"
        >
          <i className="fas fa-sign-in-alt mr-1" />
          Entrar
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowModal(false)}
          />
          <div className="relative flex flex-col bg-white rounded-lg p-6 w-full max-w-md shadow-lg ">
            <div className="flex items-center justify-between ">
              <h3 className="text-lg font-semibold m-1">Autenticação Necessária</h3>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 m-1 ">
                <i className='fas fa-times hover:text-gray-600'></i>
              </button>
            </div>

            <p className="text-sm text-gray-600 m-1">
              Faça login ou crie uma conta para fazer denúncias de forma segura e anônima
            </p>

            <div className="flex items-center justify-around mt-4 mx-10 rounded-full bg-gray-200 p-1">
              <button
                onClick={() => setTab("login")}
                className={`w-1/2 py-2 rounded-full transition 
                ${tab === "login" ? "bg-white text-gray-600" : "text-gray-600"}`}>
              
                Entrar
              </button>
              <button
                onClick={() => setTab("register")}
                className={`w-1/2 py-2 rounded-full transition 
                ${tab === "register" ? "bg-white text-gray-600" : "text-gray-600"}`}>
                Criar conta
              </button>
            </div>

            {tab === "login" && (
            <form action="#" className='bg-white my-6 rounded-lg flex flex-col'>
              <label
                htmlFor="email"
                className='m-1'>
                E-mail
              </label>
              <input
                type="text"
                id='email'
                placeholder='seu@gmail.com'
                className='bg-gray-200 rounded-md m-1 pl-4 p-1' />

              <label
                htmlFor="senha"
                className='m-1'>
                Senha
              </label>
              <input
                type="text"
                id='senha'
                placeholder='*******'
                className='bg-gray-200 rounded-md m-1 pl-4 p-1' />

              <input
                type="submit"
                value="Entrar"
                className="bg-blue-500 hover:bg-blue-600 rounded-md  p-1 mt-4 px-6 m-1" />
            </form>
            )}

            {tab === "register" && (
              <form action="#" className="bg-white my-6 rounded-lg flex flex-col">
                <label htmlFor="reg-email" className="m-1">E-mail</label>
                <input
                  type="email"
                  id="reg-email"
                  name="email"
                  placeholder="seu@gmail.com"
                  className="bg-gray-200 rounded-md m-1 pl-4 p-1"
                />

                <label htmlFor="reg-senha" className="m-1">Senha</label>
                <input
                  type="password"
                  id="reg-senha"
                  name="senha"
                  placeholder="*******"
                  className="bg-gray-200 rounded-md m-1 pl-4 p-1"
                />

                <label htmlFor="reg-confirm-senha" className="m-1">Confirmar senha</label>
                <input
                  type="password"
                  id="reg-confirm-senha"
                  name="confirmSenha"
                  placeholder="*******"
                  className="bg-gray-200 rounded-md m-1 pl-4 p-1"
                />

                <input
                  type="submit"
                  value="Criar conta"
                  className="bg-green-600 hover:bg-green-700 rounded-md p-1 mt-4 px-6 m-1 text-white cursor-pointer"
                />
              </form>
            )}

            

          </div>
        </div>
      )}
    </>
  )
}

export default Entrar


