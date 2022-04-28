import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import tw from "tailwind-styled-components";

const Title = tw.h1`
  text-3xl
  font-bold
  underline
  text-purple-600

  hover:text-orange-600
`;

const Header = () => {
  return (
    <header>
      <Link href="/" passHref>
        <Title>
          <Image src="/tomato.png" height="38" width="38" alt="logo" /> Recipe
          Search
        </Title>
      </Link>
      <Nav></Nav>
    </header>
  );
};

export default Header;
