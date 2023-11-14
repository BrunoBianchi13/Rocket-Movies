import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  border-radius: 16px;
  background: rgba(255, 133, 155, 0.05);
  text-align: left;
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.COLORS.PINK};
  padding: 22px;
  margin-bottom: 16px;

  > p {

    text-align: left;
    color: var(--Gray, #999591);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 16PX;
    
  }

  > h1 {

    text-align: left;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  
  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
    span {
      font-size: 12px;
      color: white;
      border-radius: 8px;
      background: #282124;
      padding: 5px 16px;
      align-items: flex-start;
      margin-right: 8px;
    }
  }
`;
