import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import tw from "tailwind-styled-components";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Head>
        <title>Recipe Search</title>
        <meta name="description" content="Over engineered recipe search app" />
        <link rel="icon" href="/tomato.png" />
      </Head>
      <Header />

      <main className="h-full flex-auto">{children}</main>

      <Footer />
    </Container>
  );
};

export default Layout;

const Container = tw.div`
  bg-slate-400
  
  min-h-screen
  flex
  flex-col
`;
