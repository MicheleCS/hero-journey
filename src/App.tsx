import { BrowserRouter } from 'react-router-dom';
import { RoutesThree } from './routes';
import { NavbarProvider } from './core/context/navbarContext';




function App() {
  return (
    <BrowserRouter>
      <NavbarProvider>
      <RoutesThree />
      </NavbarProvider>      
    </BrowserRouter>
  );
}

export default App;