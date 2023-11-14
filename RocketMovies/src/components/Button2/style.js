import styled from 'styled-components';


export const Container = styled.button`
  width:100%;
  background-color: black;
  color: ${({ theme }) => theme.COLORS.PINK};
  display:flex;
  align-items:center;
  justify-content: center;
  height: 56px;
  border: 0;
  padding:  0 16px;
  margin-top: 16px;
  border-radius:  10px;
  font-weight: 500;

  > svg {
    margin-right: 8px;
  }
`
  