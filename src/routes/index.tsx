import { Route, Routes } from 'react-router-dom';
import Heroes from '../features/heroes';
import Home from '../features/home';
import Navbar from '../core/navbar/navbar';

export const RoutesThree = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroes" element={<Heroes />} />
      </Routes>
    </>
  );
};