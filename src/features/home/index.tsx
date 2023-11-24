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
            imageSm: hero.images.sm,
            powerstats: hero.powerstats,
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
    <div className={styles.container}>

<div className={styles.contant}>
        {errorPopup && (
        <div className="popup">
          <p>Falha de comunicação com a API. Por favor, tente novamente mais tarde.</p>
        </div>
      )}
      {heroes.length === 0 && <p>Carregando...</p>}
      {heroes.map((hero, index) => (
        <div key={index} className={styles.homeCard}>
          <ActionAreaCard
            name={hero.name}
            image={hero.imageSm}
            powerstats={hero.powerstats}
          />
        </div>
      ))}
</div>
<h2>Arraste para o lado e conheça todos os nossos Meta Humanos...</h2>
    </div>
  );
};

export default Home;
