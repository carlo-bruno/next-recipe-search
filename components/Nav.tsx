import Link from "next/link";
import { useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";

const Nav = ({ isOpen }: { isOpen: boolean }) => {
  console.log("NAV", isOpen);
  return (
    <NavStyles $isOpen={isOpen}>
      <NavList>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/search">
            <a>Search</a>
          </Link>
        </li>

        <li>
          <Link href="/recipe/random">
            <a>Random</a>
          </Link>
        </li>
      </NavList>
    </NavStyles>
  );
};

export default Nav;

interface NavProps {
  $isOpen: boolean;
}

const NavStyles = tw.nav<NavProps>`
  ${(p: NavProps) => (p.$isOpen ? "" : "hidden")}

  bg-green-200
  w-full
  p-3
  justify-center
  lg:flex
  lg:w-1/2
  lg:justify-end
  `;

const NavList = tw.ul`
  lg:flex-row
  lg:inline-flex
  lg:ml-auto
  lg:w-full
  lg:items-center
  lg:justify-items-center
  lg:justify-around
`;
