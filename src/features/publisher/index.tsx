import { useState, useEffect } from 'react';
import ActionAreaCard from '../../shared/components/card';
import { MetaHuman } from './interface';



export const Marvel = () => {
  const [heroes, setHeroes] = useState<MetaHuman[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_HEROES);
        if (response.ok) {
          const data = await response.json();

          const extractedData: MetaHuman[] = data.map((hero: any) => ({
            name: hero.name,
            powerstats: hero.powerstats,
            publisher: hero.biography.publisher,
            imageSm: hero.images.sm
          }));

          const marvelHeroes: MetaHuman[] = extractedData.filter((hero: MetaHuman) => hero.publisher === "Marvel Comics");

          setHeroes(marvelHeroes);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {heroes.map((hero, index) => (
        <div key={index}>
          <ActionAreaCard
            name={hero.name}
            description={hero.publisher}
            image={hero.imageSm}
            powerstats={hero.powerstats}
          />
        </div>
      ))}
    </div>
  );
};

export const DC = () => {
  const [heroes, setHeroes] = useState<MetaHuman[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_HEROES);
        if (response.ok) {
          const data = await response.json();

          const extractedData: MetaHuman[] = data.map((hero: any) => ({
            name: hero.name,
            powerstats: hero.powerstats,
            publisher: hero.biography.publisher,
            imageSm: hero.images.sm
          }));

          const marvelHeroes: MetaHuman[] = extractedData.filter((hero: MetaHuman) => hero.publisher === "DC Comics");

          setHeroes(marvelHeroes);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {heroes.map((hero, index) => (
        <div key={index}>
          <ActionAreaCard
            name={hero.name}
            description={hero.publisher}
            image={hero.imageSm}
            powerstats={hero.powerstats}
          />
        </div>
      ))}
    </div>
  );
};

