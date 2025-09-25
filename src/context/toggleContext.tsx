import { createContext, useContext, useState } from "react";
import { type CartItemProps } from "../service/api";

interface toggleProps {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
  addToCart: (cart: CartItemProps) => void;
  cart: CartItemProps[];
  removeFromCart: (cart: CartItemProps) => void;
}

const ToggleContext = createContext<toggleProps | null>(null);

export const ToggleProvider = ({ children }: { children: React.ReactNode }) => {
  const [toggle, setToggle] = useState(false);
  const [cart, setCart] = useState<CartItemProps[]>([]);

  const addToCart = (ItemList: CartItemProps) => {
    setCart((prevCart) => {
      const isPresent = prevCart.some((item) => item.id === ItemList.id);
      if (isPresent) {
        return prevCart.map((item) => {
          return item.id === ItemList.id
            ? { ...item, quantity: ItemList.quantity }
            : item;
        });
      }
      return [...prevCart, ItemList];
    });
  };

  const removeFromCart = (item: CartItemProps) => {
    setCart((prevCart) =>
      prevCart.filter((itemList) => itemList.id !== item.id)
    );
  };

  return (
    <ToggleContext.Provider
      value={{ toggle, setToggle, addToCart, cart, removeFromCart }}
    >
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
