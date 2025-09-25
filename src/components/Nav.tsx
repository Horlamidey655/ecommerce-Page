import { Suspense, useEffect, useState } from "react";
import { useRef } from "react";
import { useToggle } from "../context/toggleContext";
import { menuList } from "../service/api";
import logo from "../assets/logo.svg";
import avatar from "../assets/images/image-avatar.png";
import ListItem from "./ListItem";
import { lazy } from "react";

const Cart = lazy(() => import("./Cart"));
const Nav = () => {
  const { cart } = useToggle();
  const [showCart, setShowCart] = useState(false);

  const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const { toggle, setToggle } = useToggle();
  const [active, setActive] = useState(menuList[0]);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  const cartRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowCart(false);
      }
    };
    if (showCart) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCart]);

  return (
    <nav className="flex items-center justify-between p-6 md:pb-8 md:border-b border-[var(--color-dark-grayish-blue)] relative">
      {showCart && (
        <div
          className="absolute gap-6 rounded-lg z-80 max-sm:grid max-sm:place-content-center top-[70%] right-[5%] w-[25rem] max-sm:w-[20rem]"
          ref={cartRef}
        >
          <Suspense>
            <Cart setShowCart={setShowCart} />
          </Suspense>
        </div>
      )}
      <div className="flex items-center gap-3 md:gap-[3rem]">
        <span className="sm:hidden" onClick={handleToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <figure>
          <img src={logo} alt="" />
        </figure>
        <ul className="flex max-sm:hidden gap-6 capitalize">
          {menuList.map((menu) => {
            return (
              <ListItem
                key={menu}
                active={active}
                setActive={setActive}
                label={menu}
              />
            );
          })}
        </ul>
      </div>

      <div className="flex gap-8 items-center">
        <div
          className="relative"
          ref={buttonRef}
          onClick={() => setShowCart(!showCart)}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </span>
          <span className="absolute top-[-15%] right-[-15%] text-[0.5rem] text-white grid place-content-center bg-[var(--color-orange)] rounded-full w-4 h-4">
            {quantity}
          </span>
        </div>

        <figure className="w-8 h-8 rounded-full">
          <img
            src={avatar}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </figure>
      </div>
    </nav>
  );
};

export default Nav;
