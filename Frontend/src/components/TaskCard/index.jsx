import { Button } from '../Button';
import { Container, TaskTitle, TaskDescription } from './styles';

export function TaskCard() {
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

      <TaskTitle>Titulo da Tarefa</TaskTitle>
      <TaskDescription>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quo
        aliquam numquam ad odit ab debitis fugit architecto commodi beatae rem
        non consequuntur odio officiis modi, delectus corporis laborum omnis?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
        pariatur facere unde magni officiis numquam officia velit vitae fugiat,
        eius quos, minima recusandae cum quaerat non. Quis tempora deserunt
        accusantium?
      </TaskDescription>
    </Container>
  );
}
