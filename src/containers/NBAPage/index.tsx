import React from 'react';
import { TeamsDataType } from '@types';
import { useNavigate } from 'react-router-dom';
import NBAPageUI from './NBAPageUI';

function MLBPage() {
  const navigate = useNavigate();
  const NBATeamsData = [
    {
      currentBid: '100',
      description: 'He wore this t-shirt in his farewell',
      imgSrc: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      startingBid: '50',
      title: 'Lebron James',
      id: 1,
    },
    {
      currentBid: '100',
      description: 'He wore this t-shirt in his farewell',
      imgSrc: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      startingBid: '50',
      title: 'Lebron James',
      id: 2,
    },
    {
      currentBid: '100',
      description: 'He wore this t-shirt in his farewell',
      imgSrc: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      startingBid: '50',
      title: 'Lebron James',
      id: 3,
    },
    {
      currentBid: '100',
      description: 'He wore this t-shirt in his farewell',
      imgSrc: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      startingBid: '50',
      title: 'Lebron James',
      id: 4,
    },
    {
      currentBid: '100',
      description: 'He wore this t-shirt in his farewell',
      imgSrc: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      startingBid: '50',
      title: 'Lebron James',
      id: 5,
    },
  ];
  const handleItemPress = (item: TeamsDataType): void => {
    // TODO: handle the item here
    navigate(`detail/${item.id}`);
  };
  return (
    <NBAPageUI NBATeamsData={NBATeamsData} handleItemPress={handleItemPress} />
  );
}

export default MLBPage;
