import api from '../utils/api'

import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export default function useAuth(){
    const [authenticated, setAuthenticated] = useState(false)
    const history = useHistory()

    useEffect(() =>{

        const token = localStorage.getItem('token')

        if(token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`

            setAuthenticated(true)
        }

    }, [])


    async function SignUp(user){
        try{
            const data = await api.post('/users/register', user).then((response) =>{
                return response.data
            })
            alert(data.message)
            await authUser(data)
        } catch(error){
            // tratar erro
            alert(error.response.data.message)
            console.log(error)
        }
    }

    async function login(user){
        try {
            const data = await api.post('/users/login', user).then((response) =>{
                return response.data
            })
            alert(data.message)
            await authUser(data)
        } catch (error) {
            alert(error.response.data.message)
            console.log(error)
        }
    }

    async function authUser(data){
        setAuthenticated(true)

        localStorage.setItem('token', JSON.stringify(data.token))

        window.location.href = '/';
    }

    function logout(){
        setAuthenticated(false)
        localStorage.removeItem("token")
        api.defaults.headers.Authorization = undefined
        window.location.href = '/SignIn';
    }

    return { authenticated, SignUp, logout, login }
}
