import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import heroImage from "../assets/Hero.jpg";

function Hero() {
  return (
    <section className="relative h-[700px]">
      
      <img
        src={heroImage}
        alt="Fashion Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <p className="uppercase tracking-[5px] text-sm mb-4">
          Fashion
        </p>

        <h1 className="text-6xl font-bold leading-tight max-w-4xl">
          The Best Street Style
          <br />
          From Fashion Week
        </h1>

        <p className="mt-6 text-lg">
          January 15, 2026 • By Franklyn
        </p>
      </div>

      <button className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl z-20">
        <FaChevronLeft />
      </button>

      <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl z-20">
        <FaChevronRight />
      </button>
    </section>
  );
}

export default Hero;