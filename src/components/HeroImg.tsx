import { lazy, memo, Suspense, useState } from "react";

import { imgArray } from "../service/api";

const Overlay = lazy(() => import("./Overlay"));

const HeroImg = () => {
  const [carouselImg, setCarouselImg] = useState(imgArray[0].img);
  const [count, setCount] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleThumbnail = (index: number) => {
    setCarouselImg(imgArray[index].img);
  };

  const next = () => {
    setCount((prev) => (prev >= imgArray.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCount((prev) => (prev <= 0 ? imgArray.length - 1 : prev - 1));
  };

  return (
    <figure className="flex flex-col gap-4 overflow-hidden md:px-6">
      {showOverlay && (
        <Suspense>
          <Overlay setShowOverlay={setShowOverlay} />
        </Suspense>
      )}

      <div className="sm:w-[21.5rem] h-[25rem] sm:rounded-lg sm:h-[20rem]">
        <img
          src={carouselImg}
          alt=""
          loading="eager"
          className="object-cover w-full h-full max-sm:hidden rounded-lg"
          width={400}
          height={400}
          onClick={() => setShowOverlay(true)}
        />

        {/* Mobile carousel */}
        <div className="relative sm:hidden h-[25rem]">
          {/* Slider track */}
          <div
            className="flex w-full h-full transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${count * 100}%)` }}
          >
            {imgArray.map((img, index) => (
              <div key={img.img} className="w-full h-full flex-shrink-0">
                <img
                  src={img.img}
                  alt=""
                  loading={index === 0 ? "eager" : "lazy"}
                  className="object-cover w-full h-full"
                  width={400}
                  height={400}
                />
              </div>
            ))}
          </div>

          {/* Prev button */}
          <span
            className="absolute top-1/2 left-[10%] -translate-x-1/2 -translate-y-1/2 flex justify-center items-center p-4 bg-[var(--color-white)] rounded-full cursor-pointer z-10"
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
            className="absolute top-1/2 left-[90%] -translate-x-1/2 -translate-y-1/2 flex justify-center items-center p-4 bg-[var(--color-white)] rounded-full cursor-pointer z-10"
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
        </div>
      </div>

      {/* Thumbnails (desktop only) */}
      <div className="flex gap-2 mt-4 max-sm:hidden">
        {imgArray.map((img, index) => (
          <img
            src={img.thumb}
            alt=""
            className={`${
              img.img === carouselImg
                ? "border-4 border-[var(--color-orange)] opacity-50"
                : ""
            } w-[5rem] h-[5rem] rounded-lg object-cover`}
            key={img.thumb}
            onClick={() => handleThumbnail(index)}
            loading="lazy"
            width={80}
            height={80}
          />
        ))}
      </div>
    </figure>
  );
};

export default memo(HeroImg);
