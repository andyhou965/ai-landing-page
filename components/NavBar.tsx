import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { navItems } from "@/data/LandingData";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Menu = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "hidden md:flex max-w-fit inset-x-0 mx-auto rounded-full z-[5000] px-14 p-2 items-center justify-between space-x-10",
        className
      )}
    >
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className="text-white p-2 border-b border-transparent hover:bg-neutral-800 hover:rounded-lg hover:border-white/[0.2] transition-all duration-300 text-md font-normal"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export const StartButton = () => {
  return (
    <a href="/#">
      <HoverBorderGradient
        containerClassName="rounded-full duration-200"
        as="button"
        className="bg-black text-white flex items-center space-x-2 py-3 px-4 hover:shadow-lg hover:shadow-primary/60 transition-all duration-1000"
      >
        <span>Get Started</span>
      </HoverBorderGradient>
    </a>
  );
};
