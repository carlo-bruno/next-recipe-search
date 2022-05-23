import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Accordion from "../components/Accordion";
import type { Category } from "../types";
import { categoryData } from "../utils/categoryData";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Recipe Search | Home</title>
      </Head>

      {/* About the app section */}
      <IntroSection>
        <ContentDiv>
          <h2 className="text-2xl mb-3 -mt-6 md:mt-0">Recipe Search</h2>
          <p className="w-[70%] mx-4 z-10 text-left md:mx-10 md:mb-0 md:w-[80%]">
            <ContentText>
              Explore a variety of recipes. Get inspired by our selection of
              cuisines from all over the world!
            </ContentText>
          </p>
        </ContentDiv>
        <ImageDiv>
          <Image
            src={"/../public/cooking.png"}
            width={250}
            height={250}
            alt={"Cooking graphic"}
            className="w-full object-cover h-full object-center"
          />
        </ImageDiv>
      </IntroSection>

      <hr />

      {/* Display Accordion for each Category */}
      {categoryData.map((category: Category) => (
        <Accordion key={category.id} category={category} />
      ))}
    </>
  );
};

export default Home;

const IntroSection = tw.div`
  relative
  h-48
  mx-2
  flex
  flex-row
  overflow-hidden
  
  md:my-4
  md:h-max
`;

const ContentDiv = tw.div`
  flex
  flex-col
  justify-center
  text-sm
  font-bold

  md:w-3/4
  md:text-base
`;

const ContentText = tw.span`
  bg-neutral-100
  bg-opacity-20

  md:bg-opacity-0
`;

const ImageDiv = tw.div`
  absolute
  w-2/3
  -right-10
  
  md:w-1/3
  md:static
`;
