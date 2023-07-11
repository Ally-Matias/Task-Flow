import React, { useContext, useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import api from '../../utils/api'

import { Context } from '../../context/UserContext'

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
} from './styles'
import { TaskCard } from '../../components/TaskCard'

function Home() {
  const { authenticated, logout } = useContext(Context)
  const [buttonClicked, setButtonClicked] = useState(false)
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const token = localStorage.getItem('token')

  function handleTitleChange(event) {
    setTitle(event.target.value)
  }

  // Função para lidar com a alteração da descrição
  function handleDescriptionChange(event) {
    setDescription(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    createNewTask(title, description)
  }

  async function getMyTasks() {
    try {
      const { data } = await api.get('/tasks/mytasks', {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })

      setTasks(data.tasks)
    } catch (error) {
      let title = 'Erro interno, tente novamente mais tarde!'

      if (error.response?.data?.error) {
        title = error.response.data.error
        toast.error(title, {
          position: toast.POSITION.TOP_CENTER,
          hideProgressBar: false,
          autoClose: 1000,
        })
      } else {
        toast.error(title, {
          position: toast.POSITION.TOP_CENTER,
          hideProgressBar: false,
          autoClose: 1000,
        })
      }
    }
  }

  async function createNewTask(title, description) {
    try {
      await api.post('/tasks/create', {
        title,
        description,
      })

      toast.success('Tarefa criada com sucesso!', {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: false,
        autoClose: 1000,
      })
    } catch (error) {
      let title = 'Erro interno, tente novamente mais tarde!'

      if (error.response?.data?.error) {
        title = error.response.data.error
        toast.error(title, {
          position: toast.POSITION.TOP_CENTER,
          hideProgressBar: false,
          autoClose: 1000,
        })
      } else {
        toast.error(title, {
          position: toast.POSITION.TOP_CENTER,
          hideProgressBar: false,
          autoClose: 1000,
        })
      }
    }
  }

  useEffect(() => {
    if (buttonClicked) {
      window.location.href = '/SignIn'
    }
  }, [buttonClicked])

  useEffect(() => {
    getMyTasks()
  })

  return (
    <Container>
      <Sidebar>
        <LogoContainer>
          <a href="">
            <img
              alt="Logo principal do projeto"
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

        <TaskInput onSubmit={handleSubmit}>
          <Input
            placeholder="Título da Tarefa"
            onChange={handleTitleChange}
            value={title}
          />
          <TextArea
            placeholder="Descrição da tarefa"
            value={description}
            onChange={handleDescriptionChange}
          />
          <Button type="submit" title="Cadastrar Nova Tarefa" />
        </TaskInput>
      </Sidebar>

      <Main>
        {authenticated ? (
          <>
            <button
              style={{
                Width: '30px',
                height: '30px',
                color: '#fff',
                padding: '5px 10px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                marginLeft: 'auto',
                marginTop: '20px',
                marginRight: '35px',
                borderRadius: '5px',
                border: '2px solid #d90429',
                background: '#d90429',
              }}
              onClick={logout}
            >
              Sair
            </button>
          </>
        ) : (
          <Link to="/SignIn">
            <ButtonLogin onClick={() => setButtonClicked(true)}>
              Login
            </ButtonLogin>
          </Link>
        )}

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
                  alt="Icone de uma lupa"
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
            {tasks.length === 0 ? (
              <div
                style={{
                  marginTop: '10%',
                }}
              >
                <h1 style={{ color: '#fff' }}>Nenhuma tarefa cadastrada</h1>
              </div>
            ) : (
              tasks.map((task) => (
                <TaskCard
                  key={task._id}
                  id={task._id}
                  title={task.title}
                  description={task.description}
                />
              ))
            )}
          </TaskList>
        </TasksContainer>
      </Main>
    </Container>
  )
}

export default Home
