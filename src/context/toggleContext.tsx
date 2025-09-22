import { createContext, useContext, useState } from "react";

interface cartProps {
  itemName: string;
  quantity: number;
}

interface toggleProps {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
  addCart: (cartQuantity: cartProps) => void;
  cart: cartProps[];
}

const ToggleContext = createContext<toggleProps | null>(null);

const ToggleProvider = ({ children }: { children: React.ReactNode }) => {
  const [toggle, setToggle] = useState(false);
  const [cart, setCart] = useState<cartProps[]>([]);

  const addCart = (cartQuantity: cartProps) => {
    setCart((prevCart) => [...prevCart, cartQuantity]);
  };

  return (
    <ToggleContext.Provider value={{ toggle, setToggle, addCart, cart }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const useToggle = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("useToggle must be used within a ToggleProvider");
  }
  return context;
};
