import { Container } from './styles'
import { Link } from 'react-router-dom'



import { BiArrowBack } from 'react-icons/Bi'
import { api } from '../../services/api'
import { Button } from '../../components/Button'
import { Button2 } from '../../components/Button2'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Item } from '../../components/Item'
import { useState, useEffect } from 'react'


export function CreateMovie(){
  const [ movies, setMovies] = useState([])
  const [ title, setTitle] = useState("")
  const [ description, setDescription] = useState("")
  const [ rating, setRating] = useState("")
  
  const [tags, setTags] = useState([])
  const [newtags, setNewTags] = useState([])

  function hadleAddTags(){
    setTags(prevState => [...prevState, newtags])
    setNewTags("")
  }

  function hadleRemoveTags(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }


  async function handleNewMovie(){
    
    //await api.post("/movies", {title, desc, note,tags})
    await api.post("/movies", {title, description,rating,tags})
    alert("Filme cadastrado!")

  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if (confirm) {
      await api.delete(`/movie/${params.id}`);
      navigate("/");
    }
  }

  useEffect(() => {
    async function fetchMovies() {
      
      const response = await api.get(`/movies?title=${title}`);
      console.log(response)
      setMovies(response.data);
    }
    
    fetchMovies();
  }, [title]);




  
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
            <div><h1>Novo filme</h1></div>
        </div>
        <form >
          <div className="info">
            <Input 
              Placeholder="Título"
              onChange={e=> setTitle(e.target.value)}  
            >
            </Input>
            <Input 
              value={movies.rating}
              Placeholder="Sua nota (de 0 a 5)"
              onChange={e=> setRating(e.target.value)}   
            >
            </Input>
          </div>
          
          <Textarea 
            placeholder="Descricao..."
            onChange={e=> setDescription(e.target.value)} 
          >
          </Textarea>
          
          

          <Section title={"Marcadores"}>
            <div className="marc">
              {
                tags.map((tag, index) => (
                  <Item 
                    key={String(index)}
                    value={tag}
                    onClick={() => hadleRemoveTags(tag)}
                  />
                ))
                
              }
              
              <Item 
                isNew
                placeholder="Nova Tag"
                value={newtags}
                onChange={e=> setNewTags(e.target.value)}
                onClick={e=> hadleAddTags(e)}
              
              />
            </div>
          </Section>


          <div className="info">
            <Button2 title={"Excluir filme"} onClick={e => handleRemove(e)}></Button2>
            <Button title={"Salvar alterações"} onClick={e => handleNewMovie(e)}></Button>
          </div>
          
        </form>

        </div>
        
      </main>
      
    </Container>
    
  )
}