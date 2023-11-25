export const sumPowerstats = (heroes: any[]) => {
  const totalPowerstats: { [key: string]: number } = {
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0,
  };

  heroes.forEach(hero => {
    for (const stat in hero.powerstats) {
      totalPowerstats[stat] += hero.powerstats[stat];
    }
  });

  return totalPowerstats;
};
