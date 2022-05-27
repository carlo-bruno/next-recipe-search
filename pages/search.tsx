import Head from "next/head";
import type { NextPage } from "next/types";
import type { FormEvent, SyntheticEvent } from "react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import tw from "tailwind-styled-components";
import LoadingSpinner from "../components/LoadingSpinner";
import SearchResultCard from "../components/SearchResultCard";
import { ModalProvider } from "../context/modalContext";
import useSearch from "../hooks/useSearch";
import type { RecipeTransformedData } from "../types";
import { sorter } from "../utils";

const SearchPage: NextPage = () => {
  const [queryString, setQueryString] = useState("");
  const [input, setInput] = useState("");
  const [sortBy, setSortBy] = useState(""); // default | alpha | origin | category
  const [list, setList] = useState<RecipeTransformedData[]>([]);

  const { data, isLoading, error } = useQuery(
    ["search", queryString],
    useSearch,
    {
      staleTime: 1000 * 60 * 60,
    }
  );

  useEffect(() => {
    let sortedList = data || [];
    if (sortBy !== "default") {
      sortedList = sorter(sortedList, sortBy);
    }
    setList(sortedList);
  }, [data, sortBy]);

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    console.log("🚀  handleSubmit");
    setQueryString(input.trim());
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  const handleSortSelect = (sortByString: string) => {
    setSortBy(sortByString);
  };

  return (
    <ModalProvider>
      <Head>
        <title>Recipe Search | Search {queryString}</title>
      </Head>
      {/* Search Bar */}
      <SearchBarStyles action="/" method="get" onSubmit={handleSubmit}>
        <label className="hidden" htmlFor="recipe-search">
          <span> Search Recipe</span>
        </label>
        <button type="submit" className="pr-4">{`\uD83D\uDD0D`}</button>
        <SearchInputStyles
          type="search"
          name="recipe-search"
          id="recipe-search"
          value={input}
          onChange={handleChange}
          placeholder="Find a recipe"
          className=""
        />
      </SearchBarStyles>

      <div className="border w-full flex flex-row justify-between align-middle items-center  my-2 p-2">
        {queryString && data ? (
          <p className="text-center">
            We found <span className="font-bold">{data.length}</span> results
            for <span className="font-bold">{queryString}</span>
          </p>
        ) : isLoading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <p className="text-center text-sm md:text-base">
            What recipe would you like to try today?
          </p>
        )}
        {/* Sort header */}
        <p className="ml-auto mr-4  text-sm font-bold">Sort:</p>
        <ul className="w-1/3 md:w-[20%] lg:w-1/3 text-xs flex flex-row justify-between flex-wrap">
          <li onClick={() => handleSortSelect("default")}>Default</li>
          <li onClick={() => handleSortSelect("alpha")}>Alphabetically</li>
          <li onClick={() => handleSortSelect("origin")}>By Origin</li>
          <li onClick={() => handleSortSelect("category")}>By Category</li>
        </ul>
      </div>

      <SearchResultGroup>
        {error ? (
          <h2>Something went wrong</h2>
        ) : isLoading ? (
          <LoadingSpinner />
        ) : (
          list.map((recipe) => (
            <SearchResultCard key={recipe.id} recipe={recipe} />
          ))
        )}
      </SearchResultGroup>
    </ModalProvider>
  );
};

export default SearchPage;

const SearchBarStyles = tw.form`
  w-3/4
  mx-auto
  border-2
  rounded-full
  bg-white
  bg-opacity-40
  shadow-2xl
  py-2
  px-4
  mt-4
  flex
  flex-row

  focus:border-bule-200
  
  md:w-1/2
  md:mt-2
`;

const SearchInputStyles = tw.input`
  w-full
  outline-none
  appearance-none
  bg-transparent
  border-none
  leading-tight
  placeholder-neutral-800

  focus:outline-none
  focus:shadow-outline
`;

const SearchResultGroup = tw.div`
  px-2

  md:flex
  md:flex-wrap
  md:justify-center
`;
