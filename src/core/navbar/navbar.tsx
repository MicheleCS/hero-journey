import { useNavbar } from "../context/navbarContext";
import styles from './styles.module.css';


const Navbar: React.FC = () => {
  const { selected, setSelected, searchQuery, setSearchQuery } = useNavbar();

  const handleItemClick = (item: string) => {
    setSelected(item === selected ? null : item);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <nav className={styles.navbar}>
      <h2>Battle Meta Human</h2>
      <ul>
        <li
          className={selected === 'Home' ? 'active' : ''}
          onClick={() => handleItemClick('Home')}
        >
          Home
        </li>
        <li
          className={selected === 'Marvel' ? 'active' : ''}
          onClick={() => handleItemClick('Marvel')}
        >
          Marvel
        </li>
        <li
          className={selected === 'DC' ? 'active' : ''}
          onClick={() => handleItemClick('DC')}
        >
          DC
        </li>
      </ul>
      <input
        type="text"
        placeholder="Pesquisar Herói"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button type="submit"></button>
    </nav>
  );
};

export default Navbar;
