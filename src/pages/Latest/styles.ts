import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export const Section = styled.section`
  width: 100vw;
  max-width: 100vw;
  padding: 0 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PTitle = styled.h1`
  font-size: 32px;

  margin-top: 40px;
`;

const Shimmer = keyframes`
  0% {
    background-position: 0% 0%;
    opacity: 0.5;
  }
  50% {
    opacity: 1;
    background-position: -135% 0%;
  }
  100% {
    opacity: 0.5;
  }  
`;

export const FarmList = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;

  margin-top: 40px;
  padding-bottom: 10px;
  width: 100%;
`;

export const FarmItem = styled.li`
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin: auto;
  padding: 10px;
  width: 192px;
  
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);

  cursor: pointer;

  &.loading {
    height: 258px;
    
    & > span.image {
      border-radius: 5px;

      width: 148px;
      height: 148px;
      margin: 0 auto;
      margin-bottom: 7px;
    }

    & > span.title {
      font-size: 16px;
      margin: 0 auto;
      margin-bottom: 5px;
      height: 22px;
      width: 65%;
    }

    & > span.author {
      height: 16px;
      margin-bottom: 2px;
      width: 100%;
    }

    & > span.version {
      height: 16px;
      margin-bottom: 5px;
      width: 100%;
    }

    & > span.rate {
      height: 16px;
      width: 100%;
    }

    & > span.shimmer {
      background-color: #e7edf1;
      animation: ${Shimmer} 1.2s ease-in-out infinite;
      border-radius: 5px;
    }
  }
`;

export const FarmImage = styled.img`
  border-radius: 5px;

  width: 148px;
  height: 148px;
  margin: 0 auto;
  margin-bottom: 7px;
`;

export const FarmTitle = styled.h3`
  font-size: 16px;
  margin: 0 auto;
  margin-bottom: 5px;
`;

export const FarmAuthor = styled.h4`
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.textSecundary};

  & > span {
    font-weight: 600;
  }
`;

export const FarmVersion = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.textSecundary};

  & > span {
    font-weight: 600;
  }
`;

export const FarmRate = styled.div`
  margin-top: 5px;

  & > svg {
    display: none;
    color: ${({ theme }) => theme.colors.primary};

    &.yellow {
      display: inline;
    }
  }
`;
