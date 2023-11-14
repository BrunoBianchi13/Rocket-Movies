import { Container } from "./style";
import { MdDeleteForever } from 'react-icons/Md'
import { AiOutlinePlus } from 'react-icons/Ai'

export function Item({isNew, value, onClick,...rest}){

  return(
    <Container isNew={isNew}>
      <input 
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      
      />


      <button
        type="button"
        onClick={onClick}
      >
        {isNew ? <AiOutlinePlus/>:<MdDeleteForever/>}
      </button>
    </Container>
  )
 
  
}