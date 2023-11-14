import styled from 'styled-components';
import bgi from '../../assets/cine.png'


export const ContainerLeft = styled.div`
    width: 637px;
    height: 1024px; 
    float:left;
    display: flex;
    flex-direction: column;
    padding-left: 134px;
    padding-top: 235px;
    padding-right: 163px;

> h1{
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

> h5{
    color: #CAC4CF;
    
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 48px;
}

> h3{
    color: var(--White, #F4EDE8);
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 48px;
}

> a{
    color: ${({ theme }) => theme.COLORS.PINK};
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 42px;
}
`

export const ContainerRight = styled.div`
    width: 803px;
    height: 1024px;
    float:right;

    flex: 1;
    background: url(${bgi}) no-repeat center center;
    background: cover;
`


