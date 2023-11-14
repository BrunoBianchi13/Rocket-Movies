import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Container = styled.header`

  grid-area: header;
  display:flex;
  align-items: center;

  height: 105px;
  width: 100%;

  border-bottom: 1px solid black;

  display: flex;
  justify-content: space-between;

  padding: 0 123px;
  background: #1C1B1E;



  
  >.info{
    display: flex;
    flex-direction: column;
    margin-left: 64px;
    line-height:24px;
    //border: 1px solid #948F99;
    
  }
  > .info span{
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right: 9px;
    text-align: left;
    
  }
  > .info button{
    color: #948F99;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: transparent;
    border: 0;
    
  }

`

export const Logo = styled( Link )`
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right: 64px;
`


export const Profile = styled( Link )`
  
  
  

  > img{
    width: 64px;
    height: 64px; 
    border-radius: 50%;
    border: 1px solid #3E3B47;
    background: #000;
    
  }
`
