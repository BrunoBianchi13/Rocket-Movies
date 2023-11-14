import styled from 'styled-components';


export const Container = styled.div`
    main{
        padding: 40px 123px;
        align-items: center;
        
        
    }

    a{
        color:${({ theme, isNew }) => theme.COLORS.PINK};
    }
    svg{
        color:${({ theme, isNew }) => theme.COLORS.PINK};
        margin-right: 16px;
        
    }

    > main .had h1{
        margin:24px 0 40px;
    }
   
    main .info{
        display: flex;
        gap:40px;
        margin-bottom:40px;
    }

    main .marc{
        display: flex;
        gap:20px;
        width:100%;
        background: #0D0C0F;
        padding: 16px;
        align-items: flex-start;
        border-radius: 8px;
        margin-bottom:40px;
    }



`
  