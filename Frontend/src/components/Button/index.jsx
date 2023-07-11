import { ButtonDefault, ButtonRemove, ButtonEdit } from './styles'

export function Button({ title, type = 'default', ...rest }) {
  if (type === 'edit') {
    return <ButtonEdit {...rest}>Editar</ButtonEdit>
  }

  if (type === 'remove') {
    return <ButtonRemove {...rest}>X</ButtonRemove>
  }
  return <ButtonDefault {...rest}>{title}</ButtonDefault>
}
