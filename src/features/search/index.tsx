import { useLocation } from 'react-router-dom';
import ActionAreaCard from '../../shared/components/card';
import { MetaHuman } from '../publisher/interface';
import { useState, useEffect} from 'react';


export const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');
  const [filteredMetaHumans, setFilteredMetaHumans] = useState<MetaHuman[]>([]);

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

          const filteredHeroes = extractedData.filter((hero) =>
          hero.name.toLowerCase().includes(query?.toLowerCase() ?? '')
          );

          setFilteredMetaHumans(filteredHeroes);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div>
      <h2>
        Resultados para <span>{query}</span>
      </h2>
      <div>
        {filteredMetaHumans.map((filteredMetaHuman, index) => (
          <div key={index}>
            <ActionAreaCard
              name={filteredMetaHuman.name}
              description={filteredMetaHuman.publisher}
              image={filteredMetaHuman.imageSm}
            />
          </div>
        ))}
      </div>
    </div>
  );
};


