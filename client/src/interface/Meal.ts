import { Meal, Omit } from 'graphql/components';

export type MealPick = Omit<Meal, "__typename">