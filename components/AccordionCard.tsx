import Image from "next/image";
import tw from "tailwind-styled-components";

type AccordionCardProps = {};

const AccordionCard = ({}: AccordionCardProps): JSX.Element => {
  return (
    <AccordionCardStyles>
      <ContentDiv>
        <RecipeTitle>
          Accordion Card with cilantro and special sauce
        </RecipeTitle>
        <Image
          src="https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg"
          alt="Beef Dumpling Stew"
          layout="intrinsic"
          width="256"
          height="256"
          className="object-cover object-center"
        />
      </ContentDiv>
      <div className="flex justify-between">
        <AccordionCardButtons $primary={false}>Quick View</AccordionCardButtons>
        <AccordionCardButtons $primary={true}>
          See Recipe &#8594;
        </AccordionCardButtons>
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
  from-neutral-900/[.9]
  via-neutral-900/[.5]

  md:text-lg
  lg:via-neutral-900/[.3]
  xl:text-xl
`;

interface ButtonProps {
  $primary: boolean;
}

const AccordionCardButtons = tw.button`
  ${(p: ButtonProps) => (p.$primary ? "bg-orange-400" : "bg-neutral-200")}

  w-1/2
  py-1.5
  text-sm
  font-bold
  text-neutral-800
`;
