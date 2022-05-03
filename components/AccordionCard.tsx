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
          className="overflow-hidden object-cover object-center rounded-t-lg"
        />
      </ContentDiv>
      <div className="flex justify-between">
        <button className="w-1/2 bg-neutral-200 rounded-bl-lg py-1.5 font-bold text-neutral-800">
          Quick View
        </button>
        <button className="w-1/2 bg-orange-400 rounded-br-lg py-1.5 font-bold text-neutral-800">
          Show Recipe &#8594;
        </button>
      </div>
    </AccordionCardStyles>
  );
};

export default AccordionCard;

const AccordionCardStyles = tw.div`
  rounded-lg
  w-[calc(50%-0.5rem)]
  h-44
  m-1
  flex
  flex-col

  lg:h-56
  lg:w-[calc(50%-1rem)]
  lg:m-2

  xl:h-64
  xl:mx-2
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
  text-lg
  text-white
  font-bold
  h-full
  w-full
  pb-2
  px-3

  bg-gradient-to-t
  from-neutral-900/[.9]
  via-neutral-900/[.5]

  lg:via-neutral-900/[.3]
  lg:text-xl
`;
