import { createContext, useState, useContext } from 'react';

interface NavbarContextData {
  selected: string | null;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const NavbarContext = createContext<NavbarContextData | undefined>(undefined);

export function useNavbar() {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }
  return context;
}

export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <NavbarContext.Provider
      value={{ selected, setSelected, searchQuery, setSearchQuery }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
