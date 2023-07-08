import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import {
  Container,
  Sidebar,
  LogoContainer,
  TaskInput,
  TextArea,
  Main,
  Header,
  ButtonSearch,
  ButtonLogin,
  Title,
  TasksContainer,
  TaskList,
} from './styles';
import { TaskCard } from '../../components/TaskCard';

function Home() {
  
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    if (buttonClicked) {
      window.location.href = '/SignIn';
    }
  }, [buttonClicked]);

  async function handleCreateNewTask() {
    try {
      const { data } = await api.get('/tasks');

      console.log('RETORNO DA API => ', data);
    } catch (error) {
      console.log('ERRO NA API => ', error);
    }
  }

  return (
    <Container>
      <Sidebar>
        <LogoContainer>
          <a href="">
            <img
              src="src/assets/img/favicon.ico"
              height="60"
              width="60"
            />
          </a>
          <h2
            style={{
              color: '#fff',
              marginTop: '10px',
            }}
          >
            Task Flow
          </h2>
        </LogoContainer>

        <TaskInput>
          <Input placeholder="Título da Tarefa" />
          <TextArea placeholder="Descrição da tarefa" />
          <Button
            type="submit"
            title="Cadastrar Nova Tarefa"
            onClick={handleCreateNewTask()}
          />
        </TaskInput>
      </Sidebar>

      <Main>
        
        <Link to="/SignIn">
          <ButtonLogin onClick={() => setButtonClicked(true)}>Login</ButtonLogin>
        </Link>

        <Header>
          <div
            style={{
              display: 'flex',
            }}
          >
            <Input placeholder="Pesquisar Tarefa" />
            <ButtonSearch>
              <a href="">
                <img
                  src="src/assets/img/search.png"
                  height="19"
                  width="19"
                />
              </a>
            </ButtonSearch>
          </div>
        </Header>

        <TasksContainer>
          <div>
            <Title>Tarefas</Title>
          </div>
          <TaskList>
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            {/* <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard /> */}
          </TaskList>
        </TasksContainer>
      </Main>
    </Container>
  );
}


export default Home