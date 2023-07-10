import { Button } from '../Button'
import { Container, TaskTitle, TaskDescription } from './styles'

export function TaskCard({ title, description }) {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '10px',
        }}
      >
        <Button type="remove" />
        <Button type="edit" />
      </div>

      <TaskTitle>{title}</TaskTitle>
      <TaskDescription>{description}</TaskDescription>
    </Container>
  )
}
