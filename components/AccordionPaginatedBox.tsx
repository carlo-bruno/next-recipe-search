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
      <p>Page 1/2</p>
    </AccordionBoxStyles>
  );
};

export default AccordionPaginatedBox;

const AccordionBoxStyles = tw.div`
  w-full
  h-max
  border-t-2
  border-t-black
  mt-3
  pt-1
  flex
  flex-row
  flex-wrap
  justify-center
  pb-2
`;
