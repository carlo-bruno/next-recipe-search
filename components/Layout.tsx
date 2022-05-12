import Head from "next/head";
import type { ReactNode } from "react";
import tw from "tailwind-styled-components";
import Footer from "./Footer";
import Header from "./Header";

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
  h-full
  flex-auto

  md:px-5
  md:py-2
`;
