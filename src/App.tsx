import Nav from "./components/Nav";
import { useToggle } from "./context/toggleContext";
import Hero from "./components/Hero";
import { lazy, Suspense } from "react";

const MobileMenu = lazy(() => import("./components/MobileMenu"));

function App() {
  const { toggle } = useToggle();
  return (
    <>
      <header>
        <Nav />

        {toggle && (
          <Suspense fallback={<div>Loading menu images...</div>}>
            <MobileMenu />
          </Suspense>
        )}
      </header>
      <main className="max-sm:py-0 max-w-[55rem] py-[4rem] mx-auto">
        <Hero />
      </main>
    </>
  );
}

export default App;
