import { useState, useEffect } from 'react';
import ActionAreaCard from '../../shared/components/card';
import styles from './styles.module.css';

const Home = () => {
  const [heroes, setHeroes] = useState<any[]>([]);
  const [errorPopup, setErrorPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_HEROES);
        if (response.ok) {
          const data = await response.json();

          const extractedData = data.map((hero: any) => ({
            name: hero.name,
            publisher: hero.biography.publisher,
            imageSm: hero.images.sm
          }));

          setHeroes(extractedData);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setErrorPopup(true);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.homeContainer}>
        {errorPopup && (
        <div className="popup">
          <p>Communication failure with the api. Please try again later.</p>
        </div>
      )}
      {heroes.map((hero, index) => (
        <div key={index} className={styles.homeCard}>
          <ActionAreaCard
            name={hero.name}
            description={hero.publisher}
            image={hero.imageSm}
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
