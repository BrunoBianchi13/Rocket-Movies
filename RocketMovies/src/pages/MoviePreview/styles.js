import styled from 'styled-components';


export const Container = styled.div`
    main{
        padding: 40px 123px;
        align-items: center;
        
        
    }

    

    > main h1{
        margin-right: 19px;
    }
    > main a{
        color: #FF859B;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    > main .had {
        display:flex; 
        align-items: baseline;
        
        margin:24px 0;
        color: var(--White, #F4EDE8);
        font-size: 36px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;

    }

    > main p{ 
        display:flex;
        align-items:center;
        color: #F4EDE8;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 40px 0;
    }

    > main p img{
        width: 16px;
        height: 16px;
        border-radius:50%;
        margin-right: 5px;
    }
    >  main p svg {
        margin-inline: 5px;
        color: #FF859B;
    }



`
  