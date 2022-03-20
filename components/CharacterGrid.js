import React from 'react';
import CharacterItem from './CharacterItem';

function CharacterGrid({ items, loading }) {
  console.log('hello', items);
  return (
    <div className="mt-20 mx-8 px-8 text-gray-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {items && items.map((item) => <CharacterItem key={item.char_id} item={item} />)}
    </div>
  );
}

export default CharacterGrid;
