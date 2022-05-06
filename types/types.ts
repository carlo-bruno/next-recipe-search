export interface Category {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
}


export interface RecipeTransformedData {
  id: string
  title: string
  ingredients: string[]
  thumbnail: string
  area: string
  category: string
  tags: string[]
  instruction: string //? TBD display long string OR array of steps
  source: string
  youtube: string
}