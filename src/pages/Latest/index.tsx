import React, { useState, useEffect } from 'react';
import { FiStar } from 'react-icons/fi';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

import { farms } from '../../utils/defaultValues';

import {
  Container,
  Section,
  PTitle,
  FarmList,
  FarmItem,
  FarmImage,
  FarmTitle,
  FarmAuthor,
  FarmVersion,
  FarmRate,
} from './styles';

interface StarsProps {
  size: number;
}

interface FarmData {
  id: string;
  image: string;
  title: string;
  author: string;
  version: string;
  rate: number;
}

interface HomeData {
  latest: FarmData[];
  best_rated: FarmData[];
  last_mc_version: FarmData[];
  isLoading: boolean;
}

const genStars = (stars: number) => {
  const len = Math.floor(stars);
  const result = [];

  for (let i = 0; i < 5; i++) {
    result.push(({ size }: StarsProps) => (<FiStar size={size} className={i < len ? 'yellow' : ''} />));
  }

  return result;
}

const LoadingFarmItem: React.FC = () => {
  return (
    <FarmItem className='loading'>
      <span className='image shimmer'></span>
      <span className='title shimmer'></span>
      <span className='author shimmer'></span>
      <span className='version shimmer'></span>
      <span className='rate shimmer'></span>
    </FarmItem>
  )
}

const Latest: React.FC = () => {
  const [homeData, setHomeData] = useState<HomeData>({ isLoading: true } as HomeData);

  useEffect(() => {
    setTimeout(() => {
      setHomeData({
        best_rated: farms,
        latest: [...farms, ...farms, ...farms],
        last_mc_version: farms,
        isLoading: false,
      });
    }, 1500);
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Section>
          <PTitle>Adicionados Recentemente</PTitle>
        </Section>
        <Section>
          <FarmList>
            {homeData.isLoading ?
              <>
                <LoadingFarmItem />
                <LoadingFarmItem />
                <LoadingFarmItem />
                <LoadingFarmItem />
                <LoadingFarmItem />
                <LoadingFarmItem />
              </>
              :
              <>
                {homeData.latest.map((farm, index) =>
                  <FarmItem key={farm.id}>
                    <FarmImage src={farm.image} alt='Farm' />
                    <FarmTitle>{farm.title}</FarmTitle>
                    <FarmAuthor><span>Criador:</span> {farm.author}</FarmAuthor>
                    <FarmVersion><span>Versão:</span> {farm.version}</FarmVersion>
                    <FarmRate>
                      {genStars(farm.rate).map((Star, index) => (
                        <Star size={16} key={index} />
                      ))}
                    </FarmRate>
                  </FarmItem>
                )}
              </>
            }
          </FarmList>
        </Section>
      </Container>
      <Footer />
    </>
  );
}

export default Latest;