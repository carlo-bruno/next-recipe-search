import type { RecipeTransformedData } from "../types";
import { countryCodeMap } from './coutryCode';

// Transformer Util
export function transformRawRecipe(recipeRaw: any): RecipeTransformedData {
  const ingredients = _getIngredients(recipeRaw);
  const instructions = _getInstructions(recipeRaw.strInstructions);
  const countryCode = Object(countryCodeMap)[recipeRaw.strArea];

  return {
    title: recipeRaw.strMeal,
    ingredients,
    thumbnail: recipeRaw.strMealThumb,
    source: recipeRaw.strSource,
    id: recipeRaw.idMeal,
    area: recipeRaw.strArea,
    countryCode,
    instructions,
    category: recipeRaw.strCategory,
    youtube: recipeRaw.strYoutube,
    tags: recipeRaw.strTags?.split(",") || []
  }
}

function _getIngredients(recipeRaw: any) {
  const result = [];
  for (let i = 1; i <= 20; i++) {
    if (!recipeRaw[`strIngredient${i}`] || !recipeRaw[`strMeasure${i}`]) break;
    result.push(`${recipeRaw[`strMeasure${i}`]} ${recipeRaw[`strIngredient${i}`]}`);
  }
  return result;
}

function _getInstructions(instrunctionRaw: any) {
  if (!instrunctionRaw) return [];
  return instrunctionRaw.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
}

// Sorter Util
export const sorter = (
  data: RecipeTransformedData[],
  sortBy: string
): RecipeTransformedData[] => {
  if (!data) return [];

  if (sortBy === "alpha") {
    return [...data].sort(_sorterAlpha);
  } else if (sortBy === "origin") {
    return [...data].sort(_sorterOrigin);
  } else if (sortBy === "category") {
    return [...data].sort(_sorterCategory);
  } else {
    return data;
  }
};

const _sorterAlpha = (
  a: RecipeTransformedData,
  b: RecipeTransformedData
) => {
  return a.title > b.title ? 1 : -1;
};
const _sorterOrigin = (
  a: RecipeTransformedData,
  b: RecipeTransformedData
) => {
  return a.area > b.area ? 1 : -1;
};
const _sorterCategory = (
  a: RecipeTransformedData,
  b: RecipeTransformedData
) => {
  return a.category > b.category ? 1 : -1;
};