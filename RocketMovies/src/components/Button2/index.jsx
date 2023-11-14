import { Container } from "./style";


export function Button2({icon: Icon, title}){

  return(
    <Container type="button">
      {Icon && <Icon size={20} />}
      {title}
    </Container>

    
  )
 
  
}