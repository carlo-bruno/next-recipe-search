import Image from "next/image";
import tw from "tailwind-styled-components";

type SearchResultCardProps = {};

const SearchResultCard = ({}: SearchResultCardProps): JSX.Element => {
  return (
    <SearchResultCardStyles>
      <ImageDiv>
        <Image
          src="https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg"
          alt="Beef Dumpling Stew"
          layout="intrinsic"
          width="400"
          height="350"
          className="object-cover object-center overflow-hidden justify-center"
        />
      </ImageDiv>

      <ContentDiv>
        <ResultTitle>Search Result Card</ResultTitle>

        <p>Beef | Area of origin [flag]</p>
      </ContentDiv>

      <ButtonDiv>
        <SearchCardButtons>Quick View</SearchCardButtons>
        <SearchCardButtons $primary={true}>
          See Recipe &#8594;
        </SearchCardButtons>
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
  from-neutral-900/[.9]
  via-neutral-900/[.5]
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
