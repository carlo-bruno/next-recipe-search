import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import tw from "tailwind-styled-components";

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Head>
        <title>Recipe Search</title>
        <meta name="description" content="Over engineered recipe search app" />
        <link rel="icon" href="/tomato.png" />
      </Head>
      <Header />

      <ContentMain>{children}</ContentMain>

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

const ContentMain = tw.main`
  border-y-2
  container
  mx-auto
  px-5
  py-2

  h-full
  flex-auto
`;
