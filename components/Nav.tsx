import Link from "next/link";
import { useRouter } from "next/router";
import tw from "tailwind-styled-components/dist/tailwind";

const Nav = ({ isOpen }: { isOpen: boolean }) => {
  const router = useRouter();

  return (
    <NavStyles $isOpen={isOpen}>
      <NavList>
        <NavLink $isActive={router.pathname === "/"}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </NavLink>
        <NavLink $isActive={router.pathname === "/search"}>
          <Link href="/search">
            <a>Search</a>
          </Link>
        </NavLink>

        <NavLink $isActive={router.pathname === "/recipe/random"}>
          <Link href="/recipe/random">
            <a>Random</a>
          </Link>
        </NavLink>
      </NavList>
    </NavStyles>
  );
};

export default Nav;

interface NavProps {
  $isOpen: boolean;
}

const NavStyles = tw.nav`
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
  text-lg

  lg:flex-row
  lg:inline-flex
  lg:ml-auto
  lg:w-full
  lg:items-center
  lg:justify-items-center
  lg:justify-around
`;

interface NavLinkProps {
  $isActive: boolean;
}

const NavLink = tw.li`
  ${(p: NavLinkProps) => (p.$isActive ? "font-bold" : "")}
  
  align-middle
`;
