import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`

  display: none;

  &.news {
    height: 450px;
    width: 100vw;
    overflow-x: scroll;
    overflow-y: hidden;
    /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25); */

    &::-webkit-scrollbar {
      display: none;
    }

    & > svg {
      position: absolute;
      top: calc(((450px / 2) - 36px) + 60px);
      margin: 20px;
      color: ${({ theme }) => theme.colors.primary};
      cursor: pointer;
      background-color: ${({ theme }) => hexToRgba(shade(0.15, theme.colors.background), 0.5)};
      border-radius: 100%;

      &.right {
        right: 0;
      }
    }

    & > ul {
      display: flex;
      flex-direction: row;

      height: 100%;

      & > li {
        list-style: none;
        display: flex;
        flex-direction: row;

        div.image, div.text {
          width: 50vw;
        }

        & > div.image {
          position: relative;

          & > img {
            width: 50vw;
            height: 100%;
          }

          & > div.news-img-shadow {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;

            width: 100%;
            height: 100%;

            background: linear-gradient(90deg, ${({ theme }) => hexToRgba(theme.colors.background, 0)} 0%, ${({ theme }) => hexToRgba(theme.colors.background, 0)} 73.96%, ${({ theme }) => (theme.colors.background)} 100%);
          }
        }

        & > div.text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;

          padding: 0 30px;
          padding-right: 55px;

          & > h3 {
            font-size: 32px;
            font-family: Unbuntu, sans-serif;
          }

          & > p {
            font-size: 18px;
            font-family: Unbuntu, sans-serif;
            margin-top: 5px;
            margin-bottom: 30px;
          }

          & > a {
            display: flex;
            padding: 4px;
            padding-right: 6px;
            font-size: 18px;
            text-decoration: none;
            align-items: center;
            color: ${({ theme }) => theme.colors.primary};
            border: solid 1px ${({ theme }) => theme.colors.primary};
            border-radius: 5px;

            transition: 0.2s;

            &:hover {
              background: ${({ theme }) => theme.colors.secundary};
              color: #fff;
            }
          }
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
