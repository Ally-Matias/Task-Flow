import React, { useState } from 'react'

import {
  Container,
  FormContainer,
  SignInContainer,
  SignUpContainer,
  Input,
  Button,
} from './styles'

export function SignIn() {
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

          <Input placeholder="E-mail" value={email} />

          <Input placeholder="Senha" value={password} />

          <Button type="submit">Entrar</Button>
        </SignInContainer>
        <SignUpContainer>
          <h1>Olá, Devs!</h1>
          <span>
            Coloque os seus dados pessoais e comece a criar suas tasks
          </span>

          <Button
            type="submit"
            style={{
              border: '1px solid #fff',
            }}
          >
            Inscrever-se
          </Button>
        </SignUpContainer>
      </FormContainer>
    </Container>
  )
}
