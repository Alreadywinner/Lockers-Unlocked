import React from 'react';
import { TeamsDataType } from '@types';
import { useNavigate } from 'react-router-dom';
import CollegeTeamsUI from './CollegeTeamsUI';

function CollegeTeamsPage() {
  const navigate = useNavigate();
  const collegeTeamsData = [
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
    <CollegeTeamsUI
      collegeTeamsData={collegeTeamsData}
      handleItemPress={handleItemPress}
    />
  );
}

export default CollegeTeamsPage;
