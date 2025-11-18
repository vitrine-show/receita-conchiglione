
import type React from 'react';

export interface Ingredient {
  id: string;
  text: string;
}

export interface Tip {
  type: 'tip';
  text: string;
}

export interface Paragraph {
  type: 'paragraph';
  text: string;
}

export interface IngredientGroup {
  type: 'ingredient_group';
  title?: string;
  items: Ingredient[];
}

export type ContentItem = Tip | Paragraph | IngredientGroup;

export interface RecipeSectionData {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: ContentItem[];
}
