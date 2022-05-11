import type { RecipeTransformedData } from "../types";

export function transformRawRecipe(recipeRaw: any): RecipeTransformedData {
  const ingredients = _getIngredients(recipeRaw)

  return {
    title: recipeRaw.strMeal,
    ingredients,
    thumbnail: recipeRaw.strMealThumb,
    source: recipeRaw.strSource,
    id: recipeRaw.idMeal,
    area: recipeRaw.strArea,
    instruction: recipeRaw.strInstructions,
    category: recipeRaw.strCategory,
    youtube: recipeRaw.strYoutube,
    tags: recipeRaw.strTags?.split(",") || []
  }
}

function _getIngredients(recipeRaw: any) {
  const result = []
  for (let i = 1; i <= 20; i++) {
    if (!recipeRaw[`strIngredient${i}`] || !recipeRaw[`strMeasure${i}`]) break;
    result.push(`${recipeRaw[`strMeasure${i}`]} ${recipeRaw[`strIngredient${i}`]}`)
  }
  return result;
}