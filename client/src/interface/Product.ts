import { Product, Omit } from 'graphql/components';

export type ProductPick = Omit<Product, "__typename">