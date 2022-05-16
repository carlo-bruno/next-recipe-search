import tw from "tailwind-styled-components";
import useFetchCategory from "../hooks/useFetchCategory";
import AccordionCard from "./AccordionCard";
import LoadingSpinner from "./LoadingSpinner";

type AccordionPaginatedBoxProps = {
  category: string;
};

const AccordionPaginatedBox = ({
  category,
}: AccordionPaginatedBoxProps): JSX.Element => {
  const { data, isLoading, error } = useFetchCategory(category);

  console.log("in Accordion", data);

  return (
    <>
      <AccordionBoxStyles>
        {/* <LoadingSpinner /> */}
        {error ? (
          <h2>Something went wrong</h2>
        ) : isLoading ? (
          <LoadingSpinner />
        ) : (
          data &&
          data.map((recipe) => (
            <AccordionCard key={recipe.id} recipe={recipe} />
          ))
        )}
      </AccordionBoxStyles>
      <PaginationControls>
        <button>prev</button>
        <p>Page 1/1</p>
        <button>next</button>
      </PaginationControls>
    </>
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
  mx-auto

  xl:w-7/12
`;
