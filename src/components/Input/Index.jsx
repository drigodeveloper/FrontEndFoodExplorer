import { Container } from './styles'

export function Input({icon: Icon, id: Id,...rest}) {
  return (
   <Container>
        {Icon && <Icon/>}
        <input type="text" {...rest} />
   </Container>
  )
}

