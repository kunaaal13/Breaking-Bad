import Image from 'next/image';
import React from 'react';

function CharacterItem({ item }) {
  return (
    <div className="my-10 border border-gray-600 rounded-lg p-5 mx-10 hover:scale-125 duration-500">
      <div className="relative h-72 border-gray-600 rounded-lg">
        <Image
          src={item.img}
          alt=""
          layout="fill"
          className="h-full w-full object-contain sm:object-cover md:object-fill"
        />
      </div>
      <div className="my-5">
        <h1>{item.name}</h1>
        <ul>
          <li>
            <strong>Actor Name:</strong> {item.portrayed}
          </li>
          <li>
            <strong>Nickname:</strong> {item.nickname}
          </li>
          <li>
            <strong>Birthday:</strong> {item.birthday}
          </li>
          <li>
            <strong>Status:</strong> {item.status}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CharacterItem;
