import { MainLogoIcon } from '@Icon';
import React from 'react';

export default function Carousel() {
  return (
    <div className="w-full overflow-hidden">
      {/* Carousel wrapper */}
      <div className="flex items-center justify-center cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 overflow-hidden">
        <MainLogoIcon className="md:h-[40rem] h-[35rem]" />
      </div>
    </div>
  );
}
