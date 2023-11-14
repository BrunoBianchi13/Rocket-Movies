import { useState } from "react"

import { api } from "../../services/api"

import { ContainerLeft, ContainerRight } from './styles'
import { FiMail } from 'react-icons/fi'
import { RiLockPasswordFill } from 'react-icons/ri'
import { IoArrowBackSharp } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { RxAvatar } from 'react-icons/rx'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if(!name || !email || !password) {
         return alert("Preencha todos os campos!")
    }

    api.post("/users", {name, email, password})
    .then(() => {
        alert("Usuário cadastrado com sucesso");
        navigate("/");
    })
    .catch(error => {
        
            alert(error);
        
    })
}

  return(
    <div>
       <ContainerLeft>
        <h1>RocketMovies</h1>
        <h5>Aplicação para acompanhar tudo que assistir.</h5>
        <h3>Crie sua conta</h3>
        <form >

        <Input
          placeholder="Nome"
          type="text"
          icon={RxAvatar}
          onChange = {e => setName(e.target.value)}
          
        />
        
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange = {e => setEmail(e.target.value)}

        />
        <Input
          placeholder="Senha"
          type="password"
          icon={RiLockPasswordFill}
          onChange = {e => setPassword(e.target.value)}

        />

        <Button title="Cadastrar" onClick={e => handleSignUp(e)} />
        </form>
        
        

        <Link to="/"><IoArrowBackSharp/>Voltar para o login</Link>
        

      </ContainerLeft>
      <ContainerRight>
        
      </ContainerRight>
      
    </div>
   
    
  )
}
