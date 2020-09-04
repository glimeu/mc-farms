import styled, { keyframes } from 'styled-components';
// import hexToRgba from 'hex-to-rgba';
// import { shade } from 'polished';

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

  margin-bottom: 20px;
  margin-top: 40px;
`;

export const PDescription = styled.p`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecundary};

  max-width: 65vw;
`;

export const FarmLabel = styled.li`
  position: absolute;
  top: -35px;
  left: 0;
  width: 100%;

  display: flex;

  list-style: none;

  & > span {
    margin-left: 20px;
    font-size: 20px;
    font-family: Ubuntu, sans-serif;
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.bgSecundary};
    z-index: 1;
    padding: 0 5px;
    color: ${({ theme }) => theme.colors.textSecundary};
  }

  &:before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #ccc;
    position: absolute;
    top: 12px;
    z-index: 0;
  }
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 85px;
  width: 100%;
`;

export const FarmItem = styled.li`
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin: 0 10px;
  padding: 10px;
  width: 192px;
  
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.bgPrimary};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);

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
      /* background-image: linear-gradient(
        -90deg,
        #e7edf1 0%,
        #f8f8f8 50%,
        #e7edf1 100%,
      );
      background-size: 400% 400%; */
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
