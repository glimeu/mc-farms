import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;

  & > img {
    height: 240px;
    margin-bottom: 30px;
  }

  & > h3 {
    font-size: 32px;
    font-family: Ubuntu, sans-serif;
    color: ${({ theme }) => theme.colors.text};

    margin-bottom: 10px;
  }


  & > button {
    font-size: 18px;
  }
`;
