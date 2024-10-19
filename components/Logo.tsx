import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 ">
      <Image src={"/logo-white.svg"} alt="logo" width={64} height={64} />
      {/* <p className="font-normal text-lg text-zinc-50">Andy Tech</p> */}
    </Link>
  );
};
export default Logo;
