import { Container } from './styles'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { Button } from '../../components/Button'
import { HeaderB } from '../../components/HeaderB'
import { Input } from '../../components/Input'

import { AiOutlineCamera } from 'react-icons/Ai'
import { FiMail } from 'react-icons/fi'
import { RiLockPasswordFill } from 'react-icons/ri'
import { RxAvatar } from 'react-icons/rx'

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";




export function Profile(){

  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setOldPassword] = useState()
  const [passwordNew, setPassword] = useState()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate(){
      if(!name || !email || !passwordNew|| !passwordOld) {
        return alert("Preencha todos os campos!")
   }

        const user = {
            name,
            email, 
            password : passwordNew,
            old_password : passwordOld
        }
        
        await updateProfile({user, avatarFile});
    }

  function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);
    
    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview)


  }

  return(
    <Container>
      <HeaderB></HeaderB>
      <main>

        
      <img src={avatar} alt=""  />

      <div className="up"></div>

      <label className='loadPic' htmlFor="avatar">
        <AiOutlineCamera/>
            <input
              id="avatar"
              type="file"
              onChange={e => handleChangeAvatar(e)}
            />
      </label>



        <Input
          placeholder="Nome"
          icon={RxAvatar}
          value={name}
          onChange = {e=> setName(e.target.value)}
        ></Input>
        <Input
          placeholder="E-mail"
          icon={FiMail}
          value={email}
          onChange = {e=> setEmail(e.target.value)}
        ></Input>
        <Input
          placeholder="Senha Atual"
          icon={RiLockPasswordFill}
          onChange = {e=> setOldPassword(e.target.value)}
        ></Input>
        <Input
          placeholder="Nova Senha"
          icon={RiLockPasswordFill}
          onChange = {e=> setPassword(e.target.value)}
        ></Input>

        <Button title={"Salvar"} onClick={e => handleUpdate(e)}></Button>
      </main>
      

    </Container>
    
  )
}