import api from '../../utils/api'
import { Button } from '../Button'
import { Container, TaskTitle, TaskDescription } from './styles'

export function TaskCard({ id, title, description }) {
  function handleRemoveTask(idTask) {
    try {
      api.delete(`/tasks/${idTask}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container {...rest}>
      <div
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '10px',
        }}
      >
        
        <Button type="remove" onClick={() => handleRemoveTask(id)} />
        <Button type="edit" />
      </div>

      <TaskTitle>{title}</TaskTitle>
      <TaskDescription>{description}</TaskDescription>
    </Container>
  )
}
