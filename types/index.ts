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
  countryCode: string;
  category: string;
  tags: string[];
  instructions: string[];
  source: string;
  youtube: string;
}

export type SortByOptions =
  | "default"
  | "alpha_ascend"
  | "alpha_descend"
  | "origin_ascend"
  | "origin_descend"
  | "category_ascend"
  | "category_descend";