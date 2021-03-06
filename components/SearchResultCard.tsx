import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import Flag from "react-world-flags";
import tw from "tailwind-styled-components";
import { ModalContext } from "../context/modalContext";
import type { RecipeTransformedData } from "../types";

type SearchResultCardProps = {
  recipe: RecipeTransformedData;
};

const SearchResultCard = ({ recipe }: SearchResultCardProps): JSX.Element => {
  const { handleModal } = useContext(ModalContext);

  return (
    <SearchResultCardStyles>
      <ImageDiv>
        <Image
          src={recipe.thumbnail}
          alt={recipe.title}
          layout="intrinsic"
          width="400"
          height="350"
          className="object-cover object-center overflow-hidden justify-center"
        />
      </ImageDiv>

      <ContentDiv>
        <ResultTitle>{recipe.title}</ResultTitle>

        <p>
          {recipe.category} | {recipe.area}{" "}
          <Flag
            code={recipe.countryCode}
            height="12"
            className="inline w-8 h-5 -mt-1"
          />
        </p>
      </ContentDiv>

      <ButtonDiv>
        <SearchCardButtons onClick={() => handleModal(recipe)}>
          Quick View
        </SearchCardButtons>
        <Link href={`/recipe/${recipe.id}`} passHref>
          <SearchCardButtons $primary={true}>
            See Recipe &#8594;
          </SearchCardButtons>
        </Link>
      </ButtonDiv>
    </SearchResultCardStyles>
  );
};

export default SearchResultCard;

const SearchResultCardStyles = tw.div`
  rounded-xl
  overflow-hidden
  h-60
  max-w-sm
  my-2
  mx-auto
  shadow-md

  grid
  grid-cols-1
  grid-rows-[3.5fr,1fr,0.65fr]

  md:h-60
  md:w-[30%]
  md:max-w-[320px]
  md:min-w-[280px]
  md:mx-1
  lg:mx-2
  xl:mx-2.5
`;

const ImageDiv = tw.div`
  row-start-1
  row-end-3
  col-span-full
  overflow-hidden
`;

const ContentDiv = tw.div`
  z-10
  row-start-1
  row-end-3
  col-span-full

  flex
  flex-col
  justify-end
  h-full
  px-3
  pb-2
  text-white

  bg-gradient-to-t
  from-neutral-900/[.8]
  via-neutral-900/[.1]
  to-neutral-500/[.1]
`;

const ResultTitle = tw.p`
  font-bold
  text-2xl
`;

const ButtonDiv = tw.div`
  flex
  flex-row
  justify-around
  row-start-3
`;

interface ButtonProps {
  $primary?: boolean;
}

const SearchCardButtons = tw.button`
  ${(p: ButtonProps) => (p.$primary ? "bg-orange-400" : "bg-neutral-200")}

  w-1/2
  py-1.5
  text-base
  font-bold
  text-neutral-800
`;
