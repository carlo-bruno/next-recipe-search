import tw from "tailwind-styled-components";

type HamburgerMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const HamburgerMenu = ({
  isOpen,
  toggleMenu,
}: HamburgerMenuProps): JSX.Element => {
  return (
    <HamburgerMenuStyles onClick={toggleMenu}>
      <HamburgerLine className={`${isOpen && "rotate-45 translate-y-2"}`} />
      <HamburgerLine className={`${isOpen && "opacity-0"}`} />
      <HamburgerLine className={`${isOpen && "-rotate-45 -translate-y-2"}`} />
    </HamburgerMenuStyles>
  );
};

export default HamburgerMenu;

const HamburgerMenuStyles = tw.button`
  inline-flex
  flex-col
  p-1.5
  rounded-lg
  ml-auto
  outline-none
  hover:bg-orange-300

  lg:hidden
`;

const HamburgerLine = tw.div`
  h-1
  w-5
  m-0.5
  rounded-full
  bg-neutral-800
  transition
  ease
  transform
  duration-300
`;
