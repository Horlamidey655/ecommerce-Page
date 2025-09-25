import Button from "./Button";
import AddQuantity from "./AddQuantity";
import { cartItems, type CartItemProps } from "../service/api";
import { useState, useCallback } from "react";

import { useToggle } from "../context/toggleContext";

const HeroContent = () => {
  const { addToCart } = useToggle();
  const [quantity, setQuantity] = useState(1);

  const handleCartChange = useCallback(
    (cartItem: CartItemProps) => {
      const newItem = { ...cartItem, quantity: quantity };
      addToCart(newItem);
    },
    [addToCart, quantity]
  );

  return cartItems.map((cart) => {
    return (
      <div className="px-6 py-5 md:px-8" key={cart.id}>
        <p className="text-[var(--color-dark-grayish-blue)] mb-[0.8rem] uppercase">
          {cart.title}
        </p>
        <h1 className="text-2xl sm:text-4xl font-bold max-sm:mb-[1rem] mb-[4rem]">
          {cart.title}
        </h1>
        <p className="mb-8">{cart.description}</p>

        <div className="flex gap-2 sm:flex-col max-sm:items-center max-sm:justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold">{cart.price}</span>
            <span className="bg-[var(--color-black)] text-[var(--color-white)] font-bold px-2 rounded-md">
              {cart.discount}%
            </span>
          </div>
          <span className="text-[var(--color-dark-grayish-blue)] line-through">
            {cart.oldPrice}
          </span>
        </div>

        <div className="flex gap-4 max-sm:flex-wrap items-center">
          <AddQuantity setQuantity={setQuantity} quantity={quantity} />
          <Button
            variant="primary"
            text="Add to Cart"
            onClick={() => handleCartChange(cart)}
          />
        </div>
      </div>
    );
  });
};

export default HeroContent;
