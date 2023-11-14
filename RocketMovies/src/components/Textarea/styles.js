import styled from 'styled-components'

export const Container = styled.textarea`
    width: 100%;
    height: 150px;
    
    background: #262529;
    color: ${({theme})=> theme.COLORS.WHITE};

    border: none;
    resize: none;

    margin-top: 8px;
    border-radius: 10px;
    padding: 24px;
    margin-bottom: 40px;

    &::placeholder {
        color: ${({theme})=> theme.COLORS.GRAY_300};
    }
`