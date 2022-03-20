import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <header className="relative flex items-center justify-center sm:h-24 h-20 my-8">
      <Image className="" src="/../public/logo.png" layout="fill" objectFit="contain" alt="" />
    </header>
  );
}

export default Header;
