import type { RecipeTransformedData, SortByOptions } from "../types";
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
  sortBy: SortByOptions
): RecipeTransformedData[] => {
  if (!data) return [];

  switch (sortBy) {
    case "alpha_ascend":
      return [...data].sort(_sorterAlphaAscending);
    case "alpha_descend":
      return [...data].sort(_sorterAlphaDescending);
    case "origin_ascend":
      return [...data].sort(_sorterOriginAscending);
    case "origin_descend":
      return [...data].sort(_sorterOriginDescending);
    case "category_ascend":
      return [...data].sort(_sorterCategoryAscending);
    case "category_descend":
      return [...data].sort(_sorterCategoryDescending);
    default:
      return data;
  }
};

const _sorterAlphaAscending = (
  a: RecipeTransformedData,
  b: RecipeTransformedData
) => {
  return a.title > b.title ? 1 : -1;
};
const _sorterAlphaDescending = (
  a: RecipeTransformedData,
  b: RecipeTransformedData
) => {
  return a.title < b.title ? 1 : -1;
};

const _sorterOriginAscending = (
  a: RecipeTransformedData,
  b: RecipeTransformedData
) => {
  return a.area > b.area ? 1 : -1;
};
const _sorterOriginDescending = (
  a: RecipeTransformedData,
  b: RecipeTransformedData
) => {
  return a.area < b.area ? 1 : -1;
};

const _sorterCategoryAscending = (
  a: RecipeTransformedData,
  b: RecipeTransformedData
) => {
  return a.category > b.category ? 1 : -1;
};
const _sorterCategoryDescending = (
  a: RecipeTransformedData,
  b: RecipeTransformedData
) => {
  return a.category < b.category ? 1 : -1;
};