import React, { useRef } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/index';

import { News } from '../../utils/defaultValues';

import {
  Container,
  Section,
} from './styles';

const Home: React.FC = () => {
  const newsRef = useRef<HTMLUListElement>(null);

  function handleNewsToLeft() {
    const newsLen = News.length;
    const currentNews = (newsRef.current!.scrollLeft / window.innerWidth) + 1;

    if (currentNews - 1 <= 0) return newsRef.current!.scrollLeft = window.innerWidth * newsLen;

    newsRef.current!.scrollLeft -= window.innerWidth;
  }

  function handleNewsToRight() {
    const newsLen = News.length;
    const currentNews = (newsRef.current!.scrollLeft / window.innerWidth) + 1;

    if (currentNews + 1 > newsLen) return newsRef.current!.scrollLeft = 0;

    newsRef.current!.scrollLeft += window.innerWidth;
  }

  return (
    <>
      <Header />
      <Container>
        <Section className='news' ref={newsRef}>
          <ul>
            {News.map(data => (
              <li key={data.title}>
                <div className='image'>
                  <img src={data.background} alt={data.title} />
                  <div className='news-img-shadow' />
                </div>
                <div className='text'>
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                  <Link to={data.link}>
                    <FiArrowRight size={20} />
                    Ver
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          <FiArrowLeft
            size={32}
            onClick={handleNewsToLeft}
          />
          <FiArrowRight
            size={32}
            className='right'
            onClick={handleNewsToRight}
          />
        </Section>
      </Container>
    </>
  );
}

export default Home;