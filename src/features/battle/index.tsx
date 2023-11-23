import { useState, useEffect } from 'react';
import ActionAreaCard from '../../shared/components/card';
import styles from './styles.module.css';
import { sumPowerstats } from '../../shared/components/sumPowerstats';
import { Modal } from '@mui/material';

const Battle = () => {
  const [heroes, setHeroes] = useState<any[]>([]);
  const [selectedHeroes, setSelectedHeroes] = useState<any[]>([]);
  const [winner, setWinner] = useState<string>('');

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

  const handleHeroSelect = (hero: any) => {
    if (selectedHeroes.length < 2 && !selectedHeroes.includes(hero)) {
      const updatedSelectedHeroes = [...selectedHeroes, hero];
      setSelectedHeroes(updatedSelectedHeroes);

      if (updatedSelectedHeroes.length === 2) {
        const winner = calculateWinner(updatedSelectedHeroes);
        setWinner(winner);
      }
    }
  };

  const calculateWinner = (selectedHeroes: any[]) => {
    if (selectedHeroes.length === 2) {
      const totalPowerstats = sumPowerstats(selectedHeroes);

      const score1 = totalPowerstats.intelligence + totalPowerstats.strength + totalPowerstats.speed;
      const score2 = totalPowerstats.durability + totalPowerstats.power + totalPowerstats.combat;

      if (score1 > score2) {
        return `${selectedHeroes[0].name} é o vencedor!`;
      } else if (score1 < score2) {
        return `${selectedHeroes[1].name} é o vencedor!`;
      } else {
        return 'Empate!';
      }
    }
    return '';
  };

  return (
    <div className={styles.battleContainer}>
      {heroes.map((hero, index) => (
        <div
          key={index}
          className={`${styles.battleCard} ${selectedHeroes.includes(hero) ? styles.selected : ''}`}
          onClick={() => handleHeroSelect(hero)}
        >
          <ActionAreaCard
            name={hero.name}
            description={hero.publisher}
            image={hero.imageSm}
          />
        </div>
      ))}
      {selectedHeroes.length === 2 && (
        <div className={styles.result}>
          <h3>Resultado:</h3>
          <p>{winner}</p>
        </div>
      )}
    </div>
  );
};

export default Battle;
