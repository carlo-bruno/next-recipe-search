import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import tw from "tailwind-styled-components";
import HamburgerMenu from "./HamburgerMenu";
import Nav from "./Nav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <HeaderStyles>
      <Link href="/" passHref>
        <Logo>
          <Image
            src="/tomato.png"
            height="48"
            width="48"
            alt="logo"
            layout="fixed"
          />
          <Title>Recipe Search</Title>
        </Logo>
      </Link>
      <HamburgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
      <Nav isOpen={isOpen} />
    </HeaderStyles>
  );
};

export default Header;

const HeaderStyles = tw.div`
  container
  mx-auto
  px-5
  py-2
  
  flex
  flex-row
  flex-wrap 
  place-content-between
  items-center
`;

const Logo = tw.div`
  flex
  flex-row
  justify-center
  items-center
  h-18
  min-w-max
  mr-4
`;

const Title = tw.h1`
  text-xl
  text-purple-800
  font-bold
  ml-2

  hover:text-orange-600
  hover:underline

  md:text-2xl
`;
