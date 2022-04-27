import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <p>Header</p>
      </header>
      <nav>
        <p>Nav</p>
      </nav>

      <main>{children}</main>

      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
};

export default Layout;
