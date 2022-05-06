import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";

const SingleRecipePage = () => {
  return (
    <>
      <Head>
        <title>Recipe Search | Single Recipe</title>
      </Head>

      {/* Header content */}
      <HeaderStyles>
        <TitleBox>
          <h2>{"Beef Dumpling Stew"}</h2>
        </TitleBox>
        <InfoBox>
          <div>
            <span>{"Category"}</span> | <span>{"Area of Origin [flag]"}</span>
          </div>
          <LinksDiv>
            <StyledLink href="https://www.google.com">
              {`Original Source \u29C9`}
            </StyledLink>
            <StyledLink href="https://www.youtube.com">{`Youtube Video \u29C9`}</StyledLink>
          </LinksDiv>
        </InfoBox>
        <ImageBox>
          <Image
            src={
              "https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg"
            }
            width={500}
            height={500}
            alt={"Beef Dumpling Stew"}
            className="w-full object-cover h-full object-center"
          />
        </ImageBox>
      </HeaderStyles>
      {/* Ingredients section */}
      <section>
        <h3>Ingredients-------</h3>
        <ul>
          <li>---ingredient</li>
          <li>---ingredient</li>
          <li>---ingredient</li>
          <li>---ingredient</li>
          <li>---ingredient</li>
          <li>---ingredient</li>
          <li>---ingredient</li>
          <li>---ingredient</li>
          <li>---ingredient</li>
          <li>---ingredient</li>
          <li>---ingredient</li>
        </ul>
      </section>

      {/* Steps section */}
      <section>
        <h3>Steps</h3>
        <ul>
          <li>---step</li>
          <li>---step</li>
          <li>---step</li>
          <li>---step</li>
          <li>---step</li>
          <li>---step</li>
          <li>---step</li>
          <li>---step</li>
          <li>---step</li>
          <li>---step</li>
          <li>---step</li>
        </ul>
      </section>
    </>
  );
};

export default SingleRecipePage;

const HeaderStyles = tw.header`
  mx-auto
  overflow-hidden
  bg-white
  bg-opacity-40
  text-sm
  mb-10
  
  flex
  flex-col
  items-center
  
  md:shadow-xl
  md:rounded-3xl
  md:pl-6
  md:grid
  md:grid-cols-[55%_45%]
  md:grid-rows-2
  md:grid-flow-col
  lg:text-base
  xl:w-11/12
`;

const TitleBox = tw.div`
  flex
  justify-center
  w-9/12
  border-b-2
  pt-8
  pb-6
  text-2xl
  text-white
  font-bold

  
  md:justify-start
  md:w-full
  md:h-full
  md:border-0
  md:p-0
  md:items-end
  md:text-3xl
  xl:text-4xl
`;

const InfoBox = tw.div`
  flex
  flex-col
  justify-between
  items-center
  h-full
  w-9/12
  pt-6
  pb-8

  md:justify-start
  md:items-start
  md:h-full
  md:w-full
  md:pt-0
  md:pb-1
`;

const LinksDiv = tw.div`
  flex
  flex-col
  mt-2
  
  md:w-full
  md:justify-start
  md:mt-2
  
`;

const StyledLink = tw.a`
  text-base
  font-bold
  text-neutral-800
  text-center
  w-max
  mb-1
  
  border-b-[3px]
  border-current

  md:ml-4
  md:mt-1
  lg:text-base

  hover:text-blue-500
  hover:border-b-blue-500
`;

const ImageBox = tw.div`
  overflow-hidden
  flex
  justify-center
  items-center

  md:row-span-2
  md:h-max
  md:my-2
  md:mr-2
  md:rounded-r-2xl

`;
