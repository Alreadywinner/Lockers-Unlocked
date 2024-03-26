import React from 'react';
import HomePageUI from './HomePageUI';

export default function HomePage() {
  const featuredTrunks = [
    {
      src: 'https://cdn.shopify.com/s/files/1/0414/2111/1457/collections/Screen_Shot_2020-08-14_at_2.36.34_AM_360x.png?v=1675403323',
      text: 'NFL Trunk',
      key: 1,
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Basketball_Clipart.svg/300px-Basketball_Clipart.svg.png',
      text: 'NBA Trunk',
      key: 2,
    },
    {
      src: 'https://yt3.googleusercontent.com/ytc/AIdro_m9ulChYI8NMMq56BXoFNw6MAMbVX7RnTujZf4Xcg=s900-c-k-c0x00ffffff-no-rj',
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

  return <HomePageUI featured_trunks={featuredTrunks} />;
}
