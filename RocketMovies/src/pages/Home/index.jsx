import { Container } from './styles'
import { useState,useEffect } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'


import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/Ai'
import { AiOutlineStar } from 'react-icons/Ai'
import { AiOutlinePlus } from 'react-icons/Ai'


import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { Note } from '../../components/Note'
import { Input } from '../../components/Input'
export function Home(){


  const[movies, setMovies] = useState([])
  const[tags, setTags] = useState([])
  const[search, setSearch] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}`);
      setMovies(response.data);
    }
    
    fetchMovies();
  }, [search]);


  function handleDetails(id) {
    navigate(`/moviePreview/${id}`);
  }

  
  

  
  
  return(

    
    <Container>
      <Header>
      <Input
        placeholder="Pesquisar pelo título"
        onChange={(e) => setSearch(e.target.value)}
      ></Input>
      </Header>


        <main>
            <div className="had">
              <div><h1>Meus Filmes</h1></div>
              <Link to="/createMovie">
                <div><h1><Button to="/createMovie" icon={AiOutlinePlus} title="Adicionar Filme"/></h1></div>
              </Link>
            </div>
          <Section  >
            {
              movies.map(note => (
                <Note
                  key={String(note.id)}
                  data={note}
                  
                  
                  onClick={() => handleDetails(note.id)}
                />
              ))
            }
        </Section> 

   
        </main>
    </Container>
    
  )
}