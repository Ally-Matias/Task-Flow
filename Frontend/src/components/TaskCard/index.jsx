import { Button } from '../Button'
import { Container, TaskTitle, TaskDescription } from './styles'

export function TaskCard({ title, description, ...rest }) {
  return (
    <Container {...rest}>
      <div
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '10px',
        }}
      >
        <Button type="remove" onClick={() => console.log('Task removida')} />
        <Button type="edit" />
      </div>

      <TaskTitle>{title}</TaskTitle>
      <TaskDescription>{description}</TaskDescription>
    </Container>
  )
}
