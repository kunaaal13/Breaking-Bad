import Head from 'next/head';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import CharacterGrid from '../components/CharacterGrid';

export default function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.breakingbadapi.com/api/characters')
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="h-full w-full text-gray-300">
      <Head>
        <title>Breaking Bad</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <CharacterGrid Loading={loading} items={items} />
    </div>
  );
}
