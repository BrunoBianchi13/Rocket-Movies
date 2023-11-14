import { Container } from './styles'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { BiArrowBack } from 'react-icons/Bi'
import { IoTimeOutline,IoStar } from 'react-icons/io5'
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";


import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { Input } from '../../components/Input'

export function MoviePreview(){

  const { user } = useAuth()

  const [movie, setMovie] = useState([])
  const [tags, setTags] = useState([])
  const [name, setName] = useState(user.name)
  const params = useParams();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  

 useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`);
      setMovie(response.data);
    }
    
    fetchMovie();
  }, []);

  useEffect(() => {

    async function fetchTags() {


      const response = await api.get(`/tags/${params.id}`);
      setTags(response.data);
      
    }
    
    fetchTags();
    
  }, []);

  
  return(

    
    <Container>
      <Header>
      <Input
        placeholder="Pesquisar pelo título"
        onChange={(e) => setSearch(e.target.value)}
      ></Input>
      </Header>
      <main>

        <div className="container">
          <Link to="/"><BiArrowBack/><a href="">Voltar</a></Link> 

          <div className="had">
            <div><h1>{movie.title}</h1></div>
            <div>
              
            </div>
          </div>


            <p><img src={avatar} alt="" /> {name} <IoTimeOutline/>{movie.created_at}</p>
            { 
              tags.map(tag => <Tag key={tag.id} title={tag.name} />)
              
            }


            {
              
            }
            
          <p>{movie.description}</p>
                
          
        </div>
        
      </main>
      
    </Container>
    
  )
}