import Image from "next/image";
import Link from "next/link";
import tw from "tailwind-styled-components";
import type { RecipeTransformedData } from "../types";

type AccordionCardProps = {
  recipe: RecipeTransformedData;
};

const AccordionCard = ({ recipe }: AccordionCardProps): JSX.Element => {
  return (
    <AccordionCardStyles>
      <ContentDiv>
        <RecipeTitle>{recipe.title}</RecipeTitle>
        <Image
          src={recipe.thumbnail}
          alt={recipe.title}
          layout="intrinsic"
          width="256"
          height="256"
          className="object-cover object-center"
        />
      </ContentDiv>
      <div className="flex justify-between">
        <AccordionCardButtons>Quick View</AccordionCardButtons>
        <Link href={`/recipe/${recipe.id}`} passHref>
          <AccordionCardButtons $primary={true}>
            See Recipe &#8594;
          </AccordionCardButtons>
        </Link>
      </div>
    </AccordionCardStyles>
  );
};

export default AccordionCard;

const AccordionCardStyles = tw.div`
  rounded-lg
  overflow-hidden
  w-[calc(50%-0.5rem)]
  min-w-[240px]
  h-44
  m-1
  flex
  flex-col

  lg:h-56
  lg:w-[calc(25%-4px)]
  lg:min-w-[220px]
  lg:my-2
  lg:mx-0.5

  xl:h-64
  xl:w-[24%]
  xl:mx-1
`;

const ContentDiv = tw.div`
  flex
  flex-col
  h-full
  overflow-hidden
  relative
`;

const RecipeTitle = tw.p`
  absolute
  flex
  flex-row
  flex-wrap
  
  items-end
  content-end

  z-10
  text-white
  font-bold
  h-full
  w-full
  pb-2
  px-3

  bg-gradient-to-t
  from-neutral-900/[.8]
  via-neutral-900/[.1]
  to-neutral-500/[.1]

  md:text-lg
  xl:text-xl
`;

interface ButtonProps {
  $primary?: boolean;
}

const AccordionCardButtons = tw.button`
  ${(p: ButtonProps) => (p.$primary ? "bg-orange-400" : "bg-neutral-200")}

  w-1/2
  py-1.5
  text-sm
  font-bold
  text-neutral-800
`;
