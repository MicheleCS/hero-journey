import { useNavbar } from "../context/navbarContext";


const Navbar: React.FC = () => {
  const { selected, setSelected, searchQuery, setSearchQuery } = useNavbar();

  const handleItemClick = (item: string) => {
    setSelected(item === selected ? null : item);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <nav>
      <ul>
        <li
          className={selected === 'Home' ? 'active' : ''}
          onClick={() => handleItemClick('Home')}
        >
          Home
        </li>
        <li
          className={selected === 'Heroes' ? 'active' : ''}
          onClick={() => handleItemClick('Heroes')}
        >
          Heroes
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
