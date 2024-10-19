import { StarsBackground } from "@/components/ui/stars-background";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import Spline from "@splinetool/react-spline/next";

const Hero = () => {
  return (
    <div className="h-[30rem] bg-black flex flex-col items-center justify-center relative w-full gap-4">
      <div className="absolute flex flex-row items-center justify-center w-full -top-4">
        <StarsBackground starDensity={0.0003} allStarsTwinkle={false} />
        <div className="relative w-full h-[30rem] md:h-[32rem]">
          <Spline scene="https://prod.spline.design/Ow3bngGcG284rHem/scene.splinecode" />
        </div>
      </div>
      <div className="text-center">
        <p className="text-zinc-500 text-xl font-semibold relative">
          Illuminate Tomorrow with Data. Our AI Forecast Engine Turns Insight
          into Action
        </p>
      </div>
      <h2 className="relative flex-col md:flex-row z-10 text-5xl md:text-7xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-zinc-50 flex items-center gap-2 md:gap-8">
        Empower Your Decisions
        <br /> with AI Driven Insights
      </h2>
      <div className="relative z-10 mt-8 md:mt-10 flex items-center justify-center">
        <Link
          href="/#"
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-primary bg-[linear-gradient(110deg,#000103,45%,#67a6ff,55%,#000103)] bg-[length:200%_100%] px-10 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-2 hover:shadow-lg hover:shadow-primary/60"
        >
          Get Started
          <FaLocationArrow />
        </Link>
      </div>
      <div className="absolute bottom-0 md:-bottom-4 w-full h-32 bg-gradient-to-b from-transparent to-black"></div>
    </div>
  );
};
export default Hero;
