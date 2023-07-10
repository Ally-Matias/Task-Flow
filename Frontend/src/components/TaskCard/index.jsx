import React, { useEffect, useState } from 'react'

import api from '../../utils/api'

import { Button } from '../Button'
import { Input } from '../Input'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Container, TaskTitle, TaskDescription, TextArea } from './styles'

export function TaskCard({ id, title, description }) {
  const [editActive, setEditActive] = useState(false)
  const [titleTask, setTitleTask] = useState('')
  const [descriptionTask, setDescriptionTask] = useState('')

  function handleTitleChange(event) {
    setTitleTask(event.target.value)
  }

  function handleDescriptionChange(event) {
    setDescriptionTask(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    const confirmDelete = window.confirm(
      'Tem certeza que deseja excluir esta tarefa?',
    )

    if (confirmDelete) {
      editTask(id, titleTask, descriptionTask)
      setEditActive(false)
    }
  }

  async function editTask(idTask, titleTask, descriptionTask) {
    try {
      await api.put(`/tasks/${idTask}`, {
        title: titleTask,
        description: descriptionTask,
      })

      toast.success('Tarefa editada com sucesso!', {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: false,
        autoClose: 1000,
      })
    } catch (error) {
      console.log(error)
    }
  }

  function handleRemoveTask(idTask) {
    try {
      api.delete(`/tasks/${idTask}`)

      toast.success('Tarefa excluída com sucesso!', {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: false,
        autoClose: 1000,
      })
    } catch (error) {
      console.log(error)
    }
  }

  function confirmRemoveTask(idTask) {
    const confirmDelete = window.confirm(
      'Tem certeza que deseja excluir esta tarefa?',
    )
    if (confirmDelete) {
      handleRemoveTask(idTask)
    }
  }

  useEffect(() => {
    setDescriptionTask(description)
    setTitleTask(title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [1])

  return (
    <Container>
      <div
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '10px',
        }}
      >
        <Button typeButton="remove" onClick={() => confirmRemoveTask(id)} />
        <Button typeButton="edit" onClick={() => setEditActive(!editActive)} />
      </div>

      {editActive ? (
        <div>
          <Input
            placeholder="Título da Tarefa"
            onChange={handleTitleChange}
            value={titleTask}
          />
          <TextArea
            placeholder="Descrição da tarefa"
            value={descriptionTask}
            onChange={handleDescriptionChange}
          />
          <Button type="submit" title="Editar Tarefa" onClick={handleSubmit} />
        </div>
      ) : (
        <div>
          <TaskTitle>{title}</TaskTitle>
          <TaskDescription>{description}</TaskDescription>
        </div>
      )}
    </Container>
  )
}
