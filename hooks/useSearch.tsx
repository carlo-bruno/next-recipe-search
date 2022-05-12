import { QueryFunctionContext } from "react-query";
import type { RecipeTransformedData } from "../types";
import { transformRawRecipe } from "../utils";

const useSearch = async (
  context: QueryFunctionContext
): Promise<RecipeTransformedData[]> => {
  const queryString = context.queryKey[1];
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${queryString}`
  );
  const data = await res.json();
  if (data.meals) {
    const transformedData = data.meals.map((item: any) =>
      transformRawRecipe(item)
    );
    return transformedData;
  }
  return [];
};

export default useSearch;
