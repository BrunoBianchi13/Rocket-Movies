import styled from 'styled-components';


export const Container = styled.div`
   display:flex;
   align-items: center;
   background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
   color: ${({ theme }) => theme.COLORS.GRAY_300};
  
   border: ${({ theme, isNew }) => isNew ? `1px dashed white` : "none"};
   border-radius: 10px;
   padding-right: 10px;

   > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
   }
   > button{
      border:none;
      background: none;
   }


   > input{
      
      padding: 12px;
      background: transparent ;
      color: white;
      border: none;
   }
   > button svg{
      color: ${({ theme }) => theme.COLORS.PINK};
   }

   &::placeholder{
      color: white;
   }
  
`
  