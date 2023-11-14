import styled from 'styled-components';


export const Container = styled.div`
    main{
        padding: 50px 123px;
    }

> main .movies{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 32px;
    
    margin-top: 15px;
    border-radius: 16px;
    background: rgba(255, 133, 155, 0.05);
}
> main .movies p{
    overflow: hidden;
    color: var(--Gray, #999591);
    text-overflow: ellipsis;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    
}
> main .had {
    display:flex; 
    align-items: center;
    justify-content: space-between;
    margin-bottom:28px;

}




`
  