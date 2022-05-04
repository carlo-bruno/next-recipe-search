import tw from "tailwind-styled-components";
import AccordionCard from "./AccordionCard";

type AccordionPaginatedBoxProps = {};

const AccordionPaginatedBox = ({}: AccordionPaginatedBoxProps): JSX.Element => {
  return (
    <AccordionBoxStyles>
      <AccordionCard />
      <AccordionCard />
      <AccordionCard />
      <AccordionCard />
      <PaginationControls>
        <button>prev</button>
        <p>Page 1/1</p>
        <button>next</button>
      </PaginationControls>
    </AccordionBoxStyles>
  );
};

export default AccordionPaginatedBox;

const AccordionBoxStyles = tw.div`
  w-full
  h-max
  border-t
  border-black
  mt-3
  pt-1
  flex
  flex-row
  flex-wrap
  justify-center
`;

const PaginationControls = tw.div`
  w-3/4
  flex
  flex-row
  justify-between
  mt-2

  xl:w-7/12
`;
