import { Container, Profile, Logo } from './styles'
import { useAuth } from '../../hooks/auth'
import { useState } from 'react'
import { api } from '../../services/api';

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
export function Header({children}) {

  const { signOut, user } = useAuth()
  const [name, setName] = useState(user.name)

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  
  return (
    <Container>
        <Logo to="/">RocketMovies</Logo>
        {children}

        <div className='info'>
            <span>{name}</span>
            <button onClick={e => signOut(e)}>sair</button>
        </div>
      <Profile to="/profile">
          <img src={avatarUrl} alt="" />
      </Profile>
      
    </Container>
  )
}
