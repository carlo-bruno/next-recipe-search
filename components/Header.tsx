import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import tw from "tailwind-styled-components";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
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
      <HamburgerMenu onClick={handleClick}>
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="black"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </HamburgerMenu>
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
  text-2xl
  text-purple-800
  font-bold
  ml-2

  hover:text-orange-600
  hover:underline
`;

const HamburgerMenu = tw.button`
  inline-flex
  p-3
  rounded
  ml-auto
  outline-none
  hover:bg-purple-200

  lg:hidden
`;
