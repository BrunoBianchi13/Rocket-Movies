import styled from 'styled-components'

export const Container = styled.header`

  grid-area: header;
  display:flex;
  align-items: center;

  height: 105px;
  width: 100%;

  color: ${({ theme, isNew }) => theme.COLORS.PINK};
  padding: 0 80px;
  background: #1C1B1E;
  
 > a{
 color:${({ theme, isNew }) => theme.COLORS.PINK};
 margin-left:15px;
 }

`
