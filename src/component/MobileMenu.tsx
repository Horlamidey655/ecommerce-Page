import { useState } from "react";

const menuList = ["collections", "men", "Woman", "about", "contact"];

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className="flex flex-col gap-8 p-4 w-[70vh] after:content-[''] h-[full] bg-[]"
      style={{ backgroundColor: "green", width: "70vw" }}
    >
      <div onClick={() => setToggle(!toggle)}>
        {toggle ? "toggle" : "not toggle"}
      </div>
      <ul className="capitalize flex flex-col gap-3 list-style-none">
        {menuList.map((menu) => (
          <li>{menu}</li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
