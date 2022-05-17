import Head from "next/head";
import Image from "next/image";
import type { GetServerSideProps } from "next/types";
import type { RecipeTransformedData } from "../../types";
import { transformRawRecipe } from "../../utils";
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

type RecipePageProps = {
  recipe: RecipeTransformedData;
};

const SingleRecipePage = ({ recipe }: RecipePageProps) => {
  return (
    <>
      <Head>
        <title>Recipe Search | {recipe.title}</title>
      </Head>

      {/* Header content */}
      <HeaderStyles>
        <TitleBox>
          <h2>{recipe.title}</h2>
        </TitleBox>
        <InfoBox>
          <div>
            <span>{recipe.category}</span> |{" "}
            <span>
              {recipe.area} {"[flag]"}
            </span>
          </div>
          <LinksDiv>
            <StyledLink
              href={recipe.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              {`Original Source \u29C9`}
            </StyledLink>
            <StyledLink
              href={recipe.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >{`Youtube Video \u29C9`}</StyledLink>
          </LinksDiv>
        </InfoBox>
        <ImageBox>
          <Image
            src={recipe.thumbnail}
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
          {recipe.ingredients.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </IngredientsList>
      </SectionStyles>

      {/* Instructions section */}
      <SectionStyles>
        <SectionTitle>Instructions</SectionTitle>
        <ul className="max-w-4xl">
          {recipe.instructions.map((el, i) => (
            <li key={i} className="list-disc leading-9 ml-8">
              {el}
            </li>
          ))}
        </ul>
      </SectionStyles>
    </>
  );
};

export default SingleRecipePage;

export const getServerSideProps: GetServerSideProps<RecipePageProps> = async ({
  params,
}) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params?.id}`
  );
  const json = await res.json();

  if (!json.meals) {
    return {
      notFound: true,
    };
  }

  const recipe: RecipeTransformedData = transformRawRecipe(json.meals[0]);

  return {
    props: {
      recipe,
    },
  };
};
