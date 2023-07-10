import { ButtonDefault, ButtonRemove, ButtonEdit } from './styles'

export function Button({ title, typeButton = 'default', ...rest }) {
  if (typeButton === 'edit') {
    return <ButtonEdit {...rest}>Editar</ButtonEdit>
  }

  if (typeButton === 'remove') {
    return <ButtonRemove {...rest}>X</ButtonRemove>
  }
  return <ButtonDefault {...rest}>{title}</ButtonDefault>
}
