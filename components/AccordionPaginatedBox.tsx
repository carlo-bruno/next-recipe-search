import { useEffect, useState } from "react";
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
  const { data = [], isLoading, error } = useFetchCategory(category);

  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [offset, setOffset] = useState(0);
  const RECIPE_PER_PAGE = 4;

  useEffect(() => {
    setPageCount(Math.ceil(data.length / RECIPE_PER_PAGE));
  }, [data]);

  const pageUp = () => {
    if (pageNumber + 1 <= pageCount) {
      setPageNumber((prev) => prev + 1);
      setOffset((prev) => prev + RECIPE_PER_PAGE);
    }
  };

  const pageDown = () => {
    if (pageNumber - 1 >= 1) {
      setPageNumber((prev) => prev - 1);
      setOffset((prev) => prev - RECIPE_PER_PAGE);
    }
  };

  return (
    <>
      <AccordionBoxStyles>
        {/* <LoadingSpinner /> */}
        {error ? (
          <h2>Something went wrong</h2>
        ) : isLoading ? (
          <LoadingSpinner />
        ) : (
          data
            .slice(offset, offset + RECIPE_PER_PAGE)
            .map((recipe) => <AccordionCard key={recipe.id} recipe={recipe} />)
        )}
      </AccordionBoxStyles>
      <PaginationControls>
        <PageButton
          onClick={pageDown}
          $isDisabled={pageNumber <= 1 || isLoading}
        >
          &#8592; Previous
        </PageButton>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <p>
            Page {pageNumber}/{pageCount}
          </p>
        )}
        <PageButton
          onClick={pageUp}
          $isDisabled={pageNumber >= pageCount || isLoading}
        >
          Next &#8594;
        </PageButton>
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
  w-[calc(100%-0.5rem)]
  flex
  flex-row
  justify-between
  items-center
  mt-2
  mx-auto
  rounded-xl
  overflow-hidden
  text-sm
  font-bold

  md:w-3/4
  xl:w-8/12
`;

interface PageButtonProps {
  $isDisabled?: boolean;
}

const PageButton = tw.button`
  ${(p: PageButtonProps) =>
    p.$isDisabled ? "cursor-not-allowed opacity-70 " : ""}
  
  bg-orange-400
  w-1/3
  max-w-[12rem]
  py-2
  font-bold
  text-neutral-800
`;
