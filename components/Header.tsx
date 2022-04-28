import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <Link href="/" passHref>
        <h1 className="text-3xl font-bold underline">
          <Image src="/tomato.png" height="38" width="38" alt="logo" /> Recipe
          Search
        </h1>
      </Link>
      <Nav></Nav>
    </header>
  );
};

export default Header;
