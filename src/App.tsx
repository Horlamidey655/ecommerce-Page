import "./App.css";
// import AddQuantity from "./component/AddQuantity";
import MobileMenu from "./component/MobileMenu";
import Nav from "./component/Nav";
import { useToggle } from "./context/toggleContext";
import Hero from "./component/Hero";

function App() {
  const { toggle } = useToggle();
  return (
    <>
      <header>
        <Nav />
        {/* <Cart /> */}
        {toggle && <MobileMenu />}
      </header>
      <main className="max-sm:py-0 max-w-[70rem] py-[7rem] mx-auto">
        <Hero />
        {/* <AddQuantity /> */}
      </main>
    </>
  );
}

export default App;
