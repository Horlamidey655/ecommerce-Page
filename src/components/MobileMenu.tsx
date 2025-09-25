import { useToggle } from "../context/toggleContext";
import { menuList } from "../service/api";

const MobileMenu = () => {
  const { toggle, setToggle } = useToggle();

  const closeModal = () => {
    setToggle(false);
  };

  return (
    <aside
      className={`absolute top-0 w-full h-full left-0 sm:hidden ease-in z-100 duration-300 transform transition-transform ${
        toggle ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="absolute top-0 left-0 w-[60vw] h-full z-[20] bg-white p-6">
        <div onClick={closeModal} className="mb-12 cursor-pointer">
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <ul className="capitalize flex flex-col gap-3 list-style-none">
          {menuList.map((menu) => (
            <li key={menu} className="font-bold text-[1.2rem]">
              {menu}
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-black opacity-50"></div>
    </aside>
  );
};

export default MobileMenu;
