import { ButtonDefault, ButtonRemove, ButtonEdit } from './styles';

export function Button({ title, type = 'default' }) {
  if (type === 'edit') {
    return <ButtonEdit>Editar</ButtonEdit>;
  }

  if (type === 'remove') {
    return <ButtonRemove>X</ButtonRemove>;
  }
  return <ButtonDefault>{title}</ButtonDefault>;
}
