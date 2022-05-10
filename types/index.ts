export interface Category {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
}

export interface RecipeTransformedData {
  id: string;
  title: string;
  ingredients: string[];
  thumbnail: string;
  area: string;
  category: string;
  tags: string[];
  instruction: string;
  source: string;
  youtube: string;
}