import api from '../utils/api'

import { useState, useEffect } from 'react'

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`

      setAuthenticated(true)
    }
  }, [])

  async function SignUp(user) {
    try {
      const data = await api.post('/users/register', user).then((response) => {
        return response.data
      })

      await authUser(data)
    } catch (error) {
      // tratar erro
      console.log(error)
    }
  }

  function login(user) {
    console.log('Entrou na Login')
  }

  async function authUser(data) {
    setAuthenticated(true)

    localStorage.setItem('token', JSON.stringify(data.token))

    window.location.href = '/'
  }

  function logout() {
    setAuthenticated(false)
    localStorage.removeItem('token')
    api.defaults.headers.Authorization = undefined
    window.location.href = '/SignIn'
  }

  return { authenticated, SignUp, logout, login }
}
