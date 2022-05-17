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
  countryCode: number;
  category: string;
  tags: string[];
  instructions: string[];
  source: string;
  youtube: string;
}