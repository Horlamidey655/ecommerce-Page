import { imgArray } from "../service/api";
import { useState } from "react";

const Overlay = ({
  setShowOverlay,
}: {
  setShowOverlay: (show: boolean) => void;
}) => {
  const [count, setCount] = useState(0);

  const handleThumbnail = (index: number) => {
    setCount(index);
  };

  const next = () => {
    setCount((prev) => (prev >= imgArray.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCount((prev) => (prev <= 0 ? imgArray.length - 1 : prev - 1));
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.75)] flex justify-center items-center z-30">
      <figure className="flex flex-col gap-4">
        <span
          className="bg-green text-[var(--color-orange)] z-50 cursor-pointer self-end"
          onClick={() => setShowOverlay(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </span>
        <div className="relative w-[25rem] h-[25rem]">
          {/* Prev button */}
          <span
            className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center p-4 bg-[var(--color-white)] rounded-full cursor-pointer z-10"
            onClick={prev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z"
              />
            </svg>
          </span>

          {/* Next button */}
          <span
            className="absolute top-1/2 left-[100%] -translate-x-1/2 -translate-y-1/2 flex justify-center items-center p-4 bg-[var(--color-white)] rounded-full cursor-pointer z-10"
            onClick={next}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"
              />
            </svg>
          </span>
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex w-full h-full transition-transform duration-300 ease-in-out rounded-lg"
              style={{ transform: `translateX(-${count * 100}%)` }}
            >
              {imgArray.map((img, index) => (
                <div
                  key={index}
                  className="w-full h-full flex-shrink-0"
                  onClick={() => setCount(index)}
                >
                  <img
                    src={img.img}
                    alt=""
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          {imgArray.map((img, index) => (
            <img
              key={index}
              src={img.img}
              alt=""
              className={`object-cover rounded-lg w-[5rem] h-[5rem] cursor-pointer ${
                count === index
                  ? "border-4 border-[var(--color-orange)] opacity-50"
                  : ""
              }`}
              onClick={() => handleThumbnail(index)}
              loading="lazy"
            />
          ))}
        </div>
      </figure>
    </div>
  );
};

export default Overlay;
