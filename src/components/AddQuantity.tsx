import { useCallback } from "react";

const AddQuantity = ({
  setQuantity,
  quantity,
}: {
  setQuantity: (quantity: number) => void;
  quantity: number;
}) => {
  const increaseQuantity = useCallback(() => {
    setQuantity(quantity + 1);
  }, [setQuantity, quantity]);
  const decreaseQuantity = useCallback(() => {
    if (quantity > 1) setQuantity(quantity - 1);
  }, [setQuantity, quantity]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numValue = parseInt(value);

    if (isNaN(numValue) || numValue < 0) {
      setQuantity(0);
      return;
    }
  };

  return (
    <div className="flex bg-[var(--color-light-grayish-blue)] items-center justify-between gap-4 p-1 px-3 w-full h-full rounded-lg">
      <button
        onClick={decreaseQuantity}
        className="text-[var(--color-orange)] bg-grey justify-center items-center p-2 border-0 outline-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fill-rule="evenodd"
            d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <input
        placeholder="0"
        value={quantity}
        className="w-8 text-center outline-0 border-0"
        onChange={handleInput}
      />
      <button
        onClick={increaseQuantity}
        className="text-[var(--color-orange)] bg-grey flex justify-center items-center border-0 outline-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fill-rule="evenodd"
            d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default AddQuantity;
