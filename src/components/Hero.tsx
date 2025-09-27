import HeroImg from "./HeroImg";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <article className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 md:px-6">
      <HeroImg />
      <HeroContent />
    </article>
  );
};

export default Hero;
