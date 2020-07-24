/* eslint-disable */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Meal = {
  readonly __typename?: 'Meal',
  readonly _id: Scalars['ID'],
  readonly name: Scalars['String'],
  readonly weighedProducts: ReadonlyArray<WeighedProduct>,
};

export type MealInput = {
  readonly name: Maybe<Scalars['String']>,
  readonly weighedProducts: ReadonlyArray<WeighedProductsInput>,
};

export type Nutritive = {
  readonly __typename?: 'Nutritive',
  readonly nutritive: NutritiveEnum,
  readonly weight: Scalars['Int'],
};

export enum NutritiveEnum {
  Protein = 'protein',
  Carbs = 'carbs',
  Lipid = 'lipid'
}

export type NutritiveInput = {
  readonly nutritive: NutritiveEnum,
  readonly weight: Scalars['Int'],
};

export type Product = {
  readonly __typename?: 'Product',
  readonly _id: Scalars['ID'],
  readonly name: Scalars['String'],
  readonly nutritives: ReadonlyArray<Nutritive>,
  readonly calories: Scalars['Int'],
};

export type ProductInput = {
  readonly name: Scalars['String'],
  readonly nutritives: ReadonlyArray<NutritiveInput>,
  readonly calories: Maybe<Scalars['Int']>,
};

export type RootMutation = {
  readonly __typename?: 'RootMutation',
  readonly createProduct: Maybe<Product>,
  readonly createMeal: Maybe<Meal>,
};


export type RootMutationCreateProductArgs = {
  productInput: Maybe<ProductInput>
};


export type RootMutationCreateMealArgs = {
  mealInput: Maybe<MealInput>
};

export type RootQuery = {
  readonly __typename?: 'RootQuery',
  readonly products: Maybe<ReadonlyArray<Product>>,
  readonly meals: ReadonlyArray<Meal>,
};

export type WeighedProduct = {
  readonly __typename?: 'WeighedProduct',
  readonly weight: Scalars['Int'],
  readonly product: Scalars['ID'],
};

export type WeighedProductsInput = {
  readonly weight: Scalars['Int'],
  readonly product: Scalars['ID'],
};

export type CreateNewMealMutationVariables = {
  name: Scalars['String'],
  weighedProducts: ReadonlyArray<WeighedProductsInput>
};


export type CreateNewMealMutation = (
  { readonly __typename?: 'RootMutation' }
  & { readonly createMeal: Maybe<(
    { readonly __typename?: 'Meal' }
    & Pick<Meal, '_id' | 'name'>
    & { readonly weighedProducts: ReadonlyArray<(
      { readonly __typename?: 'WeighedProduct' }
      & Pick<WeighedProduct, 'weight' | 'product'>
    )> }
  )> }
);

export type CreateNewProductMutationVariables = {
  name: Scalars['String'],
  nutritives: ReadonlyArray<NutritiveInput>,
  calories: Maybe<Scalars['Int']>
};


export type CreateNewProductMutation = (
  { readonly __typename?: 'RootMutation' }
  & { readonly createProduct: Maybe<(
    { readonly __typename?: 'Product' }
    & Pick<Product, '_id' | 'name' | 'calories'>
    & { readonly nutritives: ReadonlyArray<(
      { readonly __typename?: 'Nutritive' }
      & Pick<Nutritive, 'nutritive' | 'weight'>
    )> }
  )> }
);

export type MealListQueryVariables = {};


export type MealListQuery = (
  { readonly __typename?: 'RootQuery' }
  & { readonly meals: ReadonlyArray<(
    { readonly __typename?: 'Meal' }
    & Pick<Meal, '_id' | 'name'>
    & { readonly weighedProducts: ReadonlyArray<(
      { readonly __typename?: 'WeighedProduct' }
      & Pick<WeighedProduct, 'weight' | 'product'>
    )> }
  )> }
);

export type ProductListQueryVariables = {};


export type ProductListQuery = (
  { readonly __typename?: 'RootQuery' }
  & { readonly products: Maybe<ReadonlyArray<(
    { readonly __typename?: 'Product' }
    & Pick<Product, '_id' | 'name' | 'calories'>
    & { readonly nutritives: ReadonlyArray<(
      { readonly __typename?: 'Nutritive' }
      & Pick<Nutritive, 'nutritive' | 'weight'>
    )> }
  )>> }
);


export const CreateNewMealDocument = gql`
    mutation createNewMeal($name: String!, $weighedProducts: [WeighedProductsInput!]!) {
  createMeal(mealInput: {name: $name, weighedProducts: $weighedProducts}) {
    _id
    name
    weighedProducts {
      weight
      product
    }
  }
}
    `;
export type CreateNewMealMutationFn = ApolloReactCommon.MutationFunction<CreateNewMealMutation, CreateNewMealMutationVariables>;
export type CreateNewMealComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateNewMealMutation, CreateNewMealMutationVariables>, 'mutation'>;

    export const CreateNewMealComponent = (props: CreateNewMealComponentProps) => (
      <ApolloReactComponents.Mutation<CreateNewMealMutation, CreateNewMealMutationVariables> mutation={CreateNewMealDocument} {...props} />
    );
    
export type CreateNewMealProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateNewMealMutation, CreateNewMealMutationVariables> & TChildProps;
export function withCreateNewMeal<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateNewMealMutation,
  CreateNewMealMutationVariables,
  CreateNewMealProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateNewMealMutation, CreateNewMealMutationVariables, CreateNewMealProps<TChildProps>>(CreateNewMealDocument, {
      alias: 'createNewMeal',
      ...operationOptions
    });
};

/**
 * __useCreateNewMealMutation__
 *
 * To run a mutation, you first call `useCreateNewMealMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewMealMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewMealMutation, { data, loading, error }] = useCreateNewMealMutation({
 *   variables: {
 *      name: // value for 'name'
 *      weighedProducts: // value for 'weighedProducts'
 *   },
 * });
 */
export function useCreateNewMealMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateNewMealMutation, CreateNewMealMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateNewMealMutation, CreateNewMealMutationVariables>(CreateNewMealDocument, baseOptions);
      }
export type CreateNewMealMutationHookResult = ReturnType<typeof useCreateNewMealMutation>;
export type CreateNewMealMutationResult = ApolloReactCommon.MutationResult<CreateNewMealMutation>;
export type CreateNewMealMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateNewMealMutation, CreateNewMealMutationVariables>;
export const CreateNewProductDocument = gql`
    mutation createNewProduct($name: String!, $nutritives: [NutritiveInput!]!, $calories: Int) {
  createProduct(productInput: {name: $name, nutritives: $nutritives, calories: $calories}) {
    _id
    name
    nutritives {
      nutritive
      weight
    }
    calories
  }
}
    `;
export type CreateNewProductMutationFn = ApolloReactCommon.MutationFunction<CreateNewProductMutation, CreateNewProductMutationVariables>;
export type CreateNewProductComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateNewProductMutation, CreateNewProductMutationVariables>, 'mutation'>;

    export const CreateNewProductComponent = (props: CreateNewProductComponentProps) => (
      <ApolloReactComponents.Mutation<CreateNewProductMutation, CreateNewProductMutationVariables> mutation={CreateNewProductDocument} {...props} />
    );
    
export type CreateNewProductProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateNewProductMutation, CreateNewProductMutationVariables> & TChildProps;
export function withCreateNewProduct<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateNewProductMutation,
  CreateNewProductMutationVariables,
  CreateNewProductProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateNewProductMutation, CreateNewProductMutationVariables, CreateNewProductProps<TChildProps>>(CreateNewProductDocument, {
      alias: 'createNewProduct',
      ...operationOptions
    });
};

/**
 * __useCreateNewProductMutation__
 *
 * To run a mutation, you first call `useCreateNewProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewProductMutation, { data, loading, error }] = useCreateNewProductMutation({
 *   variables: {
 *      name: // value for 'name'
 *      nutritives: // value for 'nutritives'
 *      calories: // value for 'calories'
 *   },
 * });
 */
export function useCreateNewProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateNewProductMutation, CreateNewProductMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateNewProductMutation, CreateNewProductMutationVariables>(CreateNewProductDocument, baseOptions);
      }
export type CreateNewProductMutationHookResult = ReturnType<typeof useCreateNewProductMutation>;
export type CreateNewProductMutationResult = ApolloReactCommon.MutationResult<CreateNewProductMutation>;
export type CreateNewProductMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateNewProductMutation, CreateNewProductMutationVariables>;
export const MealListDocument = gql`
    query MealList {
  meals {
    _id
    name
    weighedProducts {
      weight
      product
    }
  }
}
    `;
export type MealListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MealListQuery, MealListQueryVariables>, 'query'>;

    export const MealListComponent = (props: MealListComponentProps) => (
      <ApolloReactComponents.Query<MealListQuery, MealListQueryVariables> query={MealListDocument} {...props} />
    );
    
export type MealListProps<TChildProps = {}> = ApolloReactHoc.DataProps<MealListQuery, MealListQueryVariables> & TChildProps;
export function withMealList<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MealListQuery,
  MealListQueryVariables,
  MealListProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, MealListQuery, MealListQueryVariables, MealListProps<TChildProps>>(MealListDocument, {
      alias: 'mealList',
      ...operationOptions
    });
};

/**
 * __useMealListQuery__
 *
 * To run a query within a React component, call `useMealListQuery` and pass it any options that fit your needs.
 * When your component renders, `useMealListQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMealListQuery({
 *   variables: {
 *   },
 * });
 */
export function useMealListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MealListQuery, MealListQueryVariables>) {
        return ApolloReactHooks.useQuery<MealListQuery, MealListQueryVariables>(MealListDocument, baseOptions);
      }
export function useMealListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MealListQuery, MealListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MealListQuery, MealListQueryVariables>(MealListDocument, baseOptions);
        }
export type MealListQueryHookResult = ReturnType<typeof useMealListQuery>;
export type MealListLazyQueryHookResult = ReturnType<typeof useMealListLazyQuery>;
export type MealListQueryResult = ApolloReactCommon.QueryResult<MealListQuery, MealListQueryVariables>;
export const ProductListDocument = gql`
    query ProductList {
  products {
    _id
    name
    nutritives {
      nutritive
      weight
    }
    calories
  }
}
    `;
export type ProductListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ProductListQuery, ProductListQueryVariables>, 'query'>;

    export const ProductListComponent = (props: ProductListComponentProps) => (
      <ApolloReactComponents.Query<ProductListQuery, ProductListQueryVariables> query={ProductListDocument} {...props} />
    );
    
export type ProductListProps<TChildProps = {}> = ApolloReactHoc.DataProps<ProductListQuery, ProductListQueryVariables> & TChildProps;
export function withProductList<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ProductListQuery,
  ProductListQueryVariables,
  ProductListProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ProductListQuery, ProductListQueryVariables, ProductListProps<TChildProps>>(ProductListDocument, {
      alias: 'productList',
      ...operationOptions
    });
};

/**
 * __useProductListQuery__
 *
 * To run a query within a React component, call `useProductListQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductListQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductListQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
        return ApolloReactHooks.useQuery<ProductListQuery, ProductListQueryVariables>(ProductListDocument, baseOptions);
      }
export function useProductListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProductListQuery, ProductListQueryVariables>(ProductListDocument, baseOptions);
        }
export type ProductListQueryHookResult = ReturnType<typeof useProductListQuery>;
export type ProductListLazyQueryHookResult = ReturnType<typeof useProductListLazyQuery>;
export type ProductListQueryResult = ApolloReactCommon.QueryResult<ProductListQuery, ProductListQueryVariables>;