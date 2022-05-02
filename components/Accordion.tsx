import Image from "next/image";
import tw from "tailwind-styled-components/dist/tailwind";
import { Category } from "../types/types";

type AccordionProps = {
  category: Category;
};

const Accordion = ({ category }: AccordionProps) => {
  return (
    <AccordionStyles>
      <TextContent>
        <h3>{category.name}</h3>
        <p className="px-3">{category.description}</p>
      </TextContent>
      <ImageAndButton>
        <Image
          src={category.thumbnail}
          alt={category.name}
          width="320"
          height="200"
        />
        {/* Use chevron icons */}
        <ToggleButton>Open &#x25BC; | Close &#x25B2;</ToggleButton>
      </ImageAndButton>
      <SlideContainer></SlideContainer>
    </AccordionStyles>
  );
};

export default Accordion;

const AccordionStyles = tw.section`
  w-11/12
  mx-auto
  my-6
  min-h-72
  px-6
  py-4
  flex
  flex-row
  justify-between
  place-content-between
  flex-wrap

  border-2
  `;

const TextContent = tw.div`
  h-48
  w-1/2
  overflow-hidden
  md:w-2/3
`;

const ImageAndButton = tw.div`
  flex
  flex-col
  align-middle
  justify-between
  w-1/2
  md:w-1/3

`;

// create a consistend button style
const ToggleButton = tw.button`
  border
  border-orange-600
  bg-orange-400
  rounded-lg
  py-2
  text-white
  font-bold
`;

const SlideContainer = tw.div`
  hidden
  
  w-full
  h-32
  border-2
  border-black
`;
