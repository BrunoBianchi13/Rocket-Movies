import styled from 'styled-components';


export const Container = styled.div`
    main{
       padding:0 525px;
       display:flex;
       flex-direction: column;
       justify-content: center;
       align-items :  center;
       padding-top: 200px ;
    }

    > main > label {
  width: 48px;
        height: 48px;
        border-radius: 50%;

        background: #FF859B;
        border: none;
        position: absolute; 
        top: 220px;
        display: flex;
        font-size: 25px;
        align-items:center;
        justify-content: center;

  }

    > main img{
        width: 186px;
        height: 186px; 
        border-radius: 50%;
        border: 1px solid black;
        position: absolute;
        top: 50px;
        margin-bottom: 64px ;
    
  }

  > main .loadPic  input {
    display: none;
  }
`
