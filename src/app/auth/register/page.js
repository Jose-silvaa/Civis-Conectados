"use client"

import { useState } from 'react'
import { registerUser } from '@/firebase/register/firebaseRegister'
import { auth } from '@/firebase/config'

export default function Register() {

  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    email : '',
    password : ''
  })  

  
  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData((prevData) => ({
        ...prevData,
        [name] : value

    
    }))
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    if (!formData.email || !formData.password) {
      setError('Todos os campos são obrigatórios')
      return
    }

    try {
      const user = await registerUser(auth, formData.email, formData.password);
      alert("Usuário criado com sucesso!");
    } catch (error) {
      alert(`Erro: ${error.message}`);
    }

    setFormData({
      email : '',
      password : ''
    })

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Cadastro</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              placeholder="Seu e-mail"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              placeholder="Sua senha"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Criar Conta
          </button>
        </form>
      </div>
    </div>
  )
}
