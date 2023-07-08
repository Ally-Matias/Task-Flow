import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
// import Input from '../../components/Form/Input'

import {
  Container,
  FormContainer,
  SignInContainer,
  SignUpContainer,
  Input,
  Button,
} from './styles'

function SignUp() {
  // function handleNewTask() {
  //   console.log('new task')
  // }

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

        <SignUpContainer>
          <h1>Criar Conta</h1>
          <span>ou use seu e-mail para se registrar</span>

          <Input type="text" placeholder="Nome" />
          <Input type="text" placeholder="Sobrenome" />
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Senha" /> 
          
          
                    {/* nova versão                   

          function handleChange(e){}
          <section>         
            <form>
              <Input
                text="Nome"
                type="text"
                name="name"
                placeholder="Digite o seu nome"
                handleOnChnge={handleChange}
              
              />
            </form>
          </section> 
 */}



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
        </SignUpContainer>
      </FormContainer>
    </Container>
  )
}

export default SignUp
