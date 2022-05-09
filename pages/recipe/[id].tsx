import Head from "next/head";
import Image from "next/image";
import {
  HeaderStyles,
  ImageBox,
  InfoBox,
  IngredientsList,
  LinksDiv,
  SectionStyles,
  SectionTitle,
  StyledLink,
  TitleBox,
} from "./recipe.styles";

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
      <SectionStyles>
        <SectionTitle>Ingredients</SectionTitle>
        <IngredientsList>
          {[...Array(20)].map((el, i) => (
            <li key={i}>{`ingredient ${i + 1}`}</li>
          ))}
        </IngredientsList>
      </SectionStyles>

      {/* Instructions section */}
      <SectionStyles>
        <SectionTitle>Instructions</SectionTitle>
        <ul>
          {[...Array(10)].map((el, i) => (
            <li key={i}>{`step ${i + 1}`}</li>
          ))}
        </ul>
      </SectionStyles>
    </>
  );
};

export default SingleRecipePage;
