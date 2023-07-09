import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/Form/Input'
import { Context } from '../../context/UserContext'

import {
  Container,
  FormContainer,
  SignInContainer,
  SignUpContainer,
  Button,
} from './styles'

function SignIn() {
  const [user, setUser] = useState({})
  const { login } = useContext(Context)

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    
    login(user)
  }

  const [buttonClickedUp, setButtonClickedUp] = useState(false)

  useEffect(() => {
    if (buttonClickedUp) {
      window.location.href = '/SignUp'
    }
  }, [buttonClickedUp])

  return (
    <Container>
      <FormContainer>
        <SignInContainer>
          <h1>Entrar</h1>
          <span>ou crie sua conta</span>

          <form onSubmit={handleSubmit}>
            <Input
              text="E-mail"
              type="email"
              name="email"
              placeholder="Digite o seu e-mail"
              handleOnChange={handleChange}
            />

            <Input
              text="Senha"
              type="password"
              name="password"
              placeholder="Digite o sua senha"
              handleOnChange={handleChange}
            />

            <Button
              type="submit"
              style={{
                marginLeft: '50px',
              }}
            >
              Entrar
            </Button>
          </form>
        </SignInContainer>
        <SignUpContainer>
          <h1>Olá, Devs!</h1>
          <span>
            Coloque os seus dados pessoais e comece a criar suas tasks
          </span>

          <Link to="/SignUp">
            <Button
              type="submit"
              style={{
                border: '1px solid #fff',
              }}
              onClick={() => setButtonClickedUp(true)}
            >
              Inscrever-se
            </Button>
          </Link>
        </SignUpContainer>
      </FormContainer>
    </Container>
  )
}

export default SignIn
