import { Button, Card } from '@components';
import React from 'react';
import { Link } from 'react-router-dom';

function D1SportsPage() {
  return (
    <div className="font-gilroy mt-8 flex flex-col">
      <div>
        <Link to="/add-new">
          <Button
            className="bg-red text-white p-3 rounded float-right hover:bg-red500 mr-3"
            type="button"
          >
            Add a New Item
          </Button>
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-center">D1 Sports Items</h1>
      <div className="mt-14 mb-5 flex gap-5 flex-wrap justify-center">
        <Card
          item={{
            currentBid: '100',
            description: 'He wore this t-shirt in his farewell',
            imgSrc: 'https://flowbite.com/docs/images/blog/image-1.jpg',
            startingBid: '50',
            title: 'Lebron James',
          }}
        />
        <Card
          item={{
            currentBid: '100',
            description: 'He wore this t-shirt in his farewell',
            imgSrc: 'https://flowbite.com/docs/images/blog/image-1.jpg',
            startingBid: '50',
            title: 'Lebron James',
          }}
        />
        <Card
          item={{
            currentBid: '100',
            description: 'He wore this t-shirt in his farewell',
            imgSrc: 'https://flowbite.com/docs/images/blog/image-1.jpg',
            startingBid: '50',
            title: 'Lebron James',
          }}
        />
        <Card
          item={{
            currentBid: '100',
            description: 'He wore this t-shirt in his farewell',
            imgSrc: 'https://flowbite.com/docs/images/blog/image-1.jpg',
            startingBid: '50',
            title: 'Lebron James',
          }}
        />
      </div>
    </div>
  );
}

export default D1SportsPage;
