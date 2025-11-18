import { ReactNode } from 'react';

export interface Ingredient {
  id: string;
  text: string;
}

export interface ParagraphItem {
  type: 'paragraph';
  text: string;
}

export interface TipItem {
  type: 'tip';
  text: string;
}

export interface IngredientGroupItem {
  type: 'ingredient_group';
  title?: string;
  items: Ingredient[];
}

export type ContentItem = ParagraphItem | TipItem | IngredientGroupItem;

export interface RecipeSectionData {
  id: string;
  title: string;
  icon: ReactNode;
  content: ContentItem[];
}
