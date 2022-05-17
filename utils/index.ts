import type { RecipeTransformedData } from "../types";

export function transformRawRecipe(recipeRaw: any): RecipeTransformedData {
  const ingredients = _getIngredients(recipeRaw)
  const instructions = _getInstructions(recipeRaw.strInstructions)

  return {
    title: recipeRaw.strMeal,
    ingredients,
    thumbnail: recipeRaw.strMealThumb,
    source: recipeRaw.strSource,
    id: recipeRaw.idMeal,
    area: recipeRaw.strArea,
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