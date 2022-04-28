import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Recipe Search</title>
        <meta name="description" content="Over engineered recipe search app" />
        <link rel="icon" href="/tomato.png" />
      </Head>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
