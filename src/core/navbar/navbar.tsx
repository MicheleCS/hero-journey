import { Link, useNavigate } from "react-router-dom";
import styles from './styles.module.css';
import { useState } from 'react';

const Navbar = () => {
  const [search, setSearch] = useState<string>('');
  const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!search.trim()) return;

    navigate(`/search?q=${encodeURIComponent(search)}`);
    setSearch('');
  };

  return (
    <nav className={styles.navbar}>
      <h2>Battle Meta Human</h2>
      <div className={styles.links}>
        <Link to={"/"}><h3>HOME</h3></Link>
        <Link to={"/marvel"}><h3>MARVEL</h3></Link>
        <Link to={"/dc"}><h3>DC</h3></Link>
        <Link to={"/battle"}><h3>BATTLE</h3></Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Meta Human"
          value={search}
          onChange={handleSearchChange}
        />
        <button type="submit">submit</button>
      </form>
    </nav>
  );
};

export default Navbar;
