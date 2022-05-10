import { useState } from "react";
import Head from "next/head";
import type { NextPage } from "next/types";
import type { SyntheticEvent, FormEvent } from "react";
import tw from "tailwind-styled-components";
import SearchResultCard from "../components/SearchResultCard";

const SearchPage: NextPage = () => {
  const [queryString, setQueryString] = useState("");
  const [input, setInput] = useState("");

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    console.log("🚀  handleSubmit");
    setQueryString(input);
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  return (
    <>
      <Head>
        <title>Recipe Search | Search</title>
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

      <p className="text-center my-2">
        {queryString
          ? `Search results for ${queryString}`
          : `What recipe would you like to try today?`}
      </p>

      <SearchResultGroup>
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
      </SearchResultGroup>
    </>
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
