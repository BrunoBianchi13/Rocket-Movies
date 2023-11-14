import { Container } from "./styles";
import { Tag } from '../Tag';
import { IoTimeOutline,IoStar } from 'react-icons/io5'

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <IoStar/><IoStar/><IoStar/><IoStar/><IoStar/>
      <p>{data.description}</p>
      

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  );
}