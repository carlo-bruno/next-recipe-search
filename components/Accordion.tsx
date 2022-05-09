import Image from "next/image";
import { useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import AccordionPaginatedBox from "./AccordionPaginatedBox";
import type { Category } from "../types";

type AccordionProps = {
  category: Category;
};

const Accordion = ({ category }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
    console.log("accordion", isOpen);
  };

  return (
    <AccordionStyles>
      <TextContent>
        <h3 className="text-xl font-semibold">{category.name}</h3>
        <p className="px-3">{category.description}</p>
      </TextContent>
      <ImageAndButton>
        <Image
          src={category.thumbnail}
          alt={category.name}
          width="320"
          height="200"
        />
        <ToggleButton onClick={toggleAccordion}>
          {isOpen ? `Close \u25B2` : `Open \u25BC`}
        </ToggleButton>
      </ImageAndButton>
      {isOpen && <AccordionPaginatedBox />}
    </AccordionStyles>
  );
};

export default Accordion;

const AccordionStyles = tw.section`
  w-full
  mx-auto
  my-6
  min-h-72
  px-5
  py-3
  flex
  flex-row
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
  xl:w-[320px]
`;

// create a consistend button style
const ToggleButton = tw.button`
  bg-orange-400
  rounded-lg
  py-2
  font-bold
  text-neutral-800
`;
