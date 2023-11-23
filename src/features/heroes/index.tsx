import { useState, useEffect } from 'react';


const Heroes = () => {
  const [heroes, setHeroes] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_HEROES);
        if (response.ok) {
          const data = await response.json();

          const extractedData = data.map((hero: any) => ({
            name: hero.name,
            powerstats: hero.powerstats,
            publisher: hero.biography.publisher,
            imageSm: hero.images.sm
          }));

          setHeroes(extractedData);
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
          <p>Name: {hero.name}</p>
          <p>Publisher: {hero.publisher}</p>
          <p>Powerstats:</p>
          <ul>
            {Object.entries(hero.powerstats).map(([stat, value]: [string, any]) => (
              <li key={stat}>
                {stat}: {value}
              </li>
            ))}
          </ul>
          <img src={hero.imageSm} alt={hero.name} />
        </div>
      ))}
    </div>
  );
};

export default Heroes;
