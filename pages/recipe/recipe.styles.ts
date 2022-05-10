import tw from "tailwind-styled-components";

export const HeaderStyles = tw.header`
  mx-auto
  overflow-hidden
  bg-white
  bg-opacity-40
  text-sm
  mb-6

  flex
  flex-col
  items-center

  md:shadow-xl
  md:rounded-3xl
  md:pl-6
  md:grid
  md:grid-cols-[55%_45%]
  md:grid-rows-2
  md:grid-flow-col
  lg:text-base
`;

export const TitleBox = tw.div`
  flex
  justify-center
  w-9/12
  border-b-2
  pt-8
  pb-6
  text-2xl
  text-white
  font-bold


  md:justify-center
  md:w-full
  md:h-full
  md:border-0
  md:p-0
  md:items-end
  md:text-3xl
  xl:mb-8
  xl:text-4xl
`;

export const InfoBox = tw.div`
  flex
  flex-col
  justify-between
  items-center
  h-full
  w-9/12
  pt-6
  pb-8

  md:justify-start
  md:items-center
  md:h-full
  md:w-full
  md:pt-0
  md:pb-1
`;

export const LinksDiv = tw.div`
  flex
  flex-col
  mt-2

  md:w-full
  md:justify-center
  md:mt-2

`;

export const StyledLink = tw.a`
  text-base
  font-bold
  text-neutral-800
  text-center
  w-max
  mb-1

  border-b-[3px]
  border-current

  md:mx-auto
  md:mt-1
  lg:text-base

  hover:text-blue-500
  hover:border-b-blue-500
`;

export const ImageBox = tw.div`
  overflow-hidden
  flex
  justify-center
  items-center
  mb-4

  md:row-span-2
  md:h-max
  md:my-2
  md:mr-2
  md:rounded-r-2xl
`;

export const SectionStyles = tw.section`
  mx-auto
  overflow-hidden
  bg-white
  bg-opacity-40
  text-sm
  mb-6

  md:p-4
  xl:w-11/12
`;

export const SectionTitle = tw.h3`
  text-xl
  font-bold
  my-3
`;

//  Ingredients Section
export const IngredientsList = tw.ul`
  border-2
  grid
  grid-rows-[repeat(10,_1.5rem)]
  grid-flow-col
  grid-cols-2
  p-3
`;

