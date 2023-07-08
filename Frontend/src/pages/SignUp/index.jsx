import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Input from '../../components/Form/Input'

import { Context } from '../../context/UserContext';

import {
  Container,
  FormContainer,
  SignInContainer,
  SignUpContainer,
  Button,
} from './styles'

function SignUp() {
  // function handleNewTask() {
  //   console.log('new task')
  // }

  const [user, setUser] = useState({})
  const {SignUp} = useContext(Context)

  function handleChange(e){
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  function handleSubmit(e){
    e.preventDefault()
    // enviar o usuario para o banco
    console.log(user)
    SignUp(user)
  } 


  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    if (buttonClicked) {
      window.location.href = '/SignIn';
    }
  }, [buttonClicked]);

  return (
    <Container>
      <FormContainer>
        <SignInContainer>
          <h1>Bem-vindo de volta!</h1>
          <p>
            Para se manter conectado conosco, faça o login com suas informações
            pessoais
          </p>

          <Link to="/SignIn">
            <Button type="submit" onClick={() => setButtonClicked(true)}>Entrar</Button>
          </Link>

        </SignInContainer>

        <SignUpContainer onSubmit={handleSubmit}>
          <h1>Criar Conta</h1>
          <span>ou use seu e-mail para se registrar</span>

          {/* <Input type="text" placeholder="Nome" />
          <Input type="text" placeholder="Sobrenome" />
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Senha" /> 
          
          
                    nova versão                    */}

          
            
            <form>
              <Input
                text="Nome"
                type="text"
                name="name"
                placeholder="Digite o seu nome"
                handleOnChange={handleChange}
              />

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

              <Input
                text="Confirmacao de Senha"
                type="password"
                name="confirmpassword"
                placeholder="Confirme a sua senha"
                handleOnChange={handleChange}
              />

              <Button
                type="submit"
                style={{
                  border: '1px solid #01072d',
                  backgroundColor: '#01072d',
                  color: '#ffffff',
                }}
              >
                Inscrever-se
              </Button>
            </form>

          
        </SignUpContainer>
      </FormContainer>
    </Container>
  )
}

export default SignUp
