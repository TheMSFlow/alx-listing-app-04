import React from 'react';
import Image from "next/image"
import { IconGalleryProps } from "@/interfaces";

const iconNames: string[] = [
  'living-room.svg',
  'mansion.svg',
  'farm.svg',
  'villa.svg',
  'palm-tree.svg',
  'key-chain.svg',
  'swimming-pool.svg',
  'vacations.svg',
  'island.svg',
  'camping.svg',
  'apartment.svg',
  'home.svg',
  'lakefront.svg',
  'farm-house.svg',
  'treehouse.svg',
  'cabins.svg',
  'castles.svg',
];

const IconList: React.FC<IconGalleryProps> = ({onIconClick}) => {
return(
    <div className="flex flex-row items-center justify-between gap-4 w-full h-full flex-wrap">
      {iconNames.map((name: string) => (
        <button
          key={name}
          className="bg-transparent border-none p-0 text-xs"
          onClick={() => console.log(`Clicked ${name}`)}
        >
          <Image
            src={`/assets/${name}`}
            alt={name.replace('.svg', '')}
            width={34}
            height={34}
            className="object-contain"
          />
            {name.replace('.svg', '')}
        </button>
      ))}
    </div>
  );
};

export default IconList;