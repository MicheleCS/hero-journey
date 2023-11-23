import { Link } from "react-router-dom";
import { useNavbar } from "../context/navbarContext";
import styles from './styles.module.css';


const Navbar: React.FC = () => {
  const { selected, searchQuery, setSearchQuery } = useNavbar();



  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <nav className={styles.navbar}>
      <h2>Battle Meta Human</h2>

        <Link
          className={selected === 'Home' ? 'active' : ''}
          to={"/"}
        >
           <h3>HOME</h3>
        </Link>
        <Link
          className={selected === 'Marvel' ? 'active' : ''}
          to={"/marvel"}
        >
          <h3>MARVEL</h3>
        </Link>
        <Link
          className={selected === 'DC' ? 'active' : ''}
          to={"/dc"}
        >
          <h3>DC</h3>
        </Link>
  
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
