import { QueryFunctionContext, useQuery } from "react-query";
import type { RecipeTransformedData } from "../types";

const useFetchCategory = (category: string) => {
  const fetchCategory = async (
    context: QueryFunctionContext
  ): Promise<RecipeTransformedData[]> => {
    const categoryString = context.queryKey[1];
    console.log("categoryString", categoryString);

    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryString}`
    );
    const data = await res.json();

    if (data.meals) {
      const transformedData = data.meals.map((item: any) => {
        return {
          title: item.strMeal,
          thumbnail: item.strMealThumb,
          id: item.idMeal,
        };
      });
      return transformedData;
    }
    return [];
  };

  const { data, isLoading, error } = useQuery(
    ["category", category],
    fetchCategory,
    {
      staleTime: 1000 * 60 * 60,
    }
  );
  return { data, isLoading, error };
};

export default useFetchCategory;
