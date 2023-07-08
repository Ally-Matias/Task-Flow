import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

import {
  Container,
  FormContainer,
  SignInContainer,
  SignUpContainer,
  Input,
  Button,
} from './styles'

function SignIn() {

  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    if (buttonClicked) {
      window.location.href = '/';
    }
  }, [buttonClicked]);

  const [buttonClickedUp, setButtonClickedUp] = useState(false);

  useEffect(() => {
    if (buttonClickedUp) {
      window.location.href = '/SignUp';
    }
  }, [buttonClickedUp]);


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleNewTask() {
    console.log('new task')
  }

  return (
    <Container>
      <FormContainer>
        <SignInContainer onSubmit={handleNewTask}>
          <h1>Entrar</h1>
          <span>ou crie sua conta</span>

          <Input type="email" placeholder="E-mail" />

          <Input type="password" placeholder="Senha"/>

          <Link to="/"><Button type="submit" onClick={() => setButtonClicked(true)}>Entrar</Button></Link>
        </SignInContainer>
        <SignUpContainer>
          <h1>Olá, Devs!</h1>
          <span>
            Coloque os seus dados pessoais e comece a criar suas tasks
          </span>

          <Link to="/SignUp"><Button
            type="submit"
            style={{
              border: '1px solid #fff',
            }}
            onClick={() => setButtonClickedUp(true)}>
            Inscrever-se
          </Button></Link>
        </SignUpContainer>
      </FormContainer>
    </Container>
  )
}

export default SignIn