import React, { useEffect, useState } from 'react'
import axios from 'axios'

axios.defaults.withCredentials = true

const Entrar = () => {
  const [showModal, setShowModal] = useState(false)
  const [tab, setTab] = useState("login")
  const [form, setForm] = useState({ email: '', senha_hash: '' })
  const [usuario, setUsuario] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await axios.get("http://localhost:5000/me")
        const user = response.data.usuario || response.data
        setUsuario(user)
        if (user && user.email) localStorage.setItem('userEmail', user.email)
      } catch (err) {
        setUsuario(null);
      } finally {
        setLoading(false)
      }
    }
    
    fetchUsuario()

    const openHandler = () => setShowModal(true)
    window.addEventListener('open-login-modal', openHandler)

    return () => window.removeEventListener('open-login-modal', openHandler)
  }, [])

  const onFormSubmitLogin = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post("http://localhost:5000/usuariosEntrar", form)
      const user = response.data.usuario || response.data
      setUsuario(user)
      if (user && user.email) localStorage.setItem('userEmail', user.email)
      setShowModal(false)
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message)
      } else {
        setError("Erro desconhecido")
      }
    }
  }

  const onFormSubmitRegister = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post("http://localhost:5000/usuariosRegistrar", form)
      const user = response.data.usuario || response.data
      setUsuario(user)
      if (user && user.email) localStorage.setItem('userEmail', user.email)
      setShowModal(false)
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message)
      } else {
        setError("Erro desconhecido")
      }
    }
  }

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/logout')
    } catch (err) {
    }
    localStorage.removeItem('userEmail')
    setUsuario(null)
  }

  if (usuario) {
    return (
      <div className="flex space-x-3">
        <span className="text-gray-700">{usuario.email}</span>
        <button onClick={handleLogout} className="text-sm px-3 py-1 border rounded hover:bg-gray-100">Sair</button>
      </div>
    )
  }

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="text-black hover:bg-gray-100 rounded-md border border-gray-300 pr-4 pl-4">
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
              <form
                onSubmit={onFormSubmitLogin}
                className='bg-white my-6 rounded-lg flex flex-col'>
                <label
                  htmlFor="email"
                  className='m-1'>
                  E-mail
                </label>
                {error && <p className="text-red-500 m-1">{error}</p>}
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                  value={form.senha_hash}
                  onChange={(e) => setForm({ ...form, senha_hash: e.target.value })}
                  type="text"
                  id='senha'
                  placeholder='*******'
                  className='bg-gray-200 rounded-md m-1 pl-4 p-1' />

                <button type='submit' className='bg-blue-500 hover:bg-blue-600 rounded-md  p-1 mt-4 px-6 m-1'>
                  Entrar
                </button>
              </form>
            )}

            {tab === "register" && (
              <form
                onSubmit={onFormSubmitRegister}
                className="bg-white my-6 rounded-lg flex flex-col">
                <label htmlFor="reg-email" className="m-1">E-mail</label>
                {error && <p className="text-red-500 m-1">{error}</p>}
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  type="email"
                  id="reg-email"
                  name="email"
                  placeholder="exemplo@gmail.com"
                  className="bg-gray-200 rounded-md m-1 pl-4 p-1"
                />

                <label htmlFor="reg-senha" className="m-1">Senha</label>
                <input
                  value={form.senha_hash}
                  onChange={(e) => setForm({ ...form, senha_hash: e.target.value })}
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

                <button type='submit' className='bg-green-600 hover:bg-green-700 rounded-md p-1 mt-4 px-6 m-1 text-white cursor-pointer'>
                  Criar conta
                </button>

              </form>
            )}



          </div>
        </div>
      )}
    </>
  )
}

export default Entrar


