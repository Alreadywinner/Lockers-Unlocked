import React from 'react';
import HomePageUI from './HomePageUI';

export default function HomePage() {
  const slides = [
    {
      src: 'https://cdn.shopify.com/s/files/1/0414/2111/1457/files/Website_5_1944x.png?v=1683254520',
      key: 1,
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0414/2111/1457/files/Screen_Shot_2022-05-19_at_8.11.14_AM_1944x.png?v=1652962312',
      key: 2,
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0414/2111/1457/files/exp_1944x.png?v=1628726052',
      key: 3,
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0414/2111/1457/files/Website_3_5e3e742a-0d1a-4f78-be90-fea8890f3d7a_1944x.jpg?v=1680872229',
      key: 4,
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0414/2111/1457/files/i_1600x.jpg?v=1683834948',
      key: 5,
    },
  ];
  const featuredTrunks = [
    {
      src: 'https://cdn.shopify.com/s/files/1/0414/2111/1457/collections/Screen_Shot_2020-08-14_at_2.36.34_AM_360x.png?v=1675403323',
      text: 'NFL Trunk',
      key: 1,
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Basketball_Clipart.svg/300px-Basketball_Clipart.svg.png',
      key: 2,
      text: 'NBA Trunk',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0414/2111/1457/collections/1200px-Clemson_Tigers_logo.svg_b780f06f-762a-4c15-9ebe-289cdafe6d69_360x.png?v=1617919028',
      text: 'Clemson',

      key: 3,
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0414/2111/1457/collections/1280px-Texas_Longhorns_logo.svg_1e965cb4-d60e-4c84-bb56-d1799a880828_360x.png?v=1617913509',
      text: 'Texas',

      key: 4,
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0414/2111/1457/collections/Michigan_Wolverines_Logo.svg_84f7699e-2b00-4adf-a6aa-6d399d093091_360x.png?v=1679875487',
      text: 'Michigan',

      key: 5,
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0414/2111/1457/collections/758px-Syracuse_Orange_logo.svg_f8e474ed-367f-418b-a200-a69b9fd9d426_360x.png?v=1617919614',
      text: 'Syracuse',

      key: 6,
    },
  ];
  const trendingCards = [
    {
      title:
        'Travis Dye Oregon Football Player-Exclusive Zip-Up Jacket with Hood (Size M)',
      imgSrc:
        'https://cdn.shopify.com/s/files/1/0414/2111/1457/products/IMG_1270-removebg-preview_fd43cf64-6d3e-4364-9e6a-6a515a10217a-removebg-preview_360x.png?v=1680972054',
    },
    {
      title:
        'Marcus Bingham Jr. Michigan State Basketball Player Exclusive "Giannis" Shoes (Size 16)',
      imgSrc:
        'https://cdn.shopify.com/s/files/1/0414/2111/1457/products/6BE17282-E3DC-4245-A3CB-D81F10311A71_1_105_c-removebg-preview_720x.png?v=1650738479',
    },
    {
      title:
        'Stetson Bennett & Brock Bowers Dual SIGNED 1 of 1 "CRACKED ICE" Trading Card (#/1)',
      imgSrc:
        'https://cdn.shopify.com/s/files/1/0414/2111/1457/products/purple_360x.jpg?v=1673572329',
    },
    {
      title:
        'Michigan Football Player-Exclusive 2016 Capital One Orange Bowl Tourneau Watch',
      imgSrc:
        'https://cdn.shopify.com/s/files/1/0414/2111/1457/products/Screenshot_2023-02-19_at_8.17.13_PM-removebg-preview_720x.png?v=1676863336',
    },
    {
      title:
        'Kameron McGusty Miami Basketball Game Issued Special Edition Black History Month Jersey (Size L)',
      imgSrc:
        'https://cdn.shopify.com/s/files/1/0414/2111/1457/products/Screen_Shot_2022-07-15_at_5.19.09_PM-removebg-preview_360x.png?v=1657977148',
    },
  ];

  return (
    <HomePageUI
      slides={{
        slides,
      }}
      featured_trunks={featuredTrunks}
      trendingTrunks={trendingCards}
    />
  );
}
