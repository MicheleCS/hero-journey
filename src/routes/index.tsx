import { Route, Routes } from 'react-router-dom';
import Navbar from '../core/navbar/navbar';
import Home from '../features/home';
import { DC, Marvel } from '../features/publisher';
import Battle from '../features/battle';
import { SearchResults } from '../features/search';




export const RoutesThree = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marvel" element={<Marvel/>} />
        <Route path="/dc" element={<DC/>} />
        <Route path="/battle" element={<Battle/>} />
        <Route path="/search" element={<SearchResults/>} />

      </Routes>
    </>
  );
};