import { Container } from './styles'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/Bi'
export function HeaderB() {
  return (
    <Container>

      <Link to="/"><BiArrowBack/>Voltar</Link>
     
      
    </Container>
  )
}
