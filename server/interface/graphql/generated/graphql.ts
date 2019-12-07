type Maybe<T> = T | null;
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Mutation = {
  addTodo: Todo,
  deleteTodo: Todo,
};


export type MutationAddTodoArgs = {
  content: Scalars['String']
};


export type MutationDeleteTodoArgs = {
  id: Scalars['Int']
};

export type Query = {
  hello: Scalars['String'],
  viewer: User,
  todos?: Maybe<Array<Todo>>,
};

export type Todo = {
  id: Scalars['Int'],
  content: Scalars['String'],
};

export type User = {
  name: Scalars['String'],
};


import { GraphQLResolveInfo } from 'graphql';

export type ArrayOrIterable<T> = Array<T> | Iterable<T>;



export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface ISubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => ISubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | ISubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export type MutationResolvers<Context = any, ParentType = Mutation> = {
  addTodo?: Resolver<Todo, ParentType, Context, MutationAddTodoArgs>,
  deleteTodo?: Resolver<Todo, ParentType, Context, MutationDeleteTodoArgs>,
};

export type QueryResolvers<Context = any, ParentType = Query> = {
  hello?: Resolver<Scalars['String'], ParentType, Context>,
  viewer?: Resolver<User, ParentType, Context>,
  todos?: Resolver<Maybe<ArrayOrIterable<Todo>>, ParentType, Context>,
};

export type TodoResolvers<Context = any, ParentType = Todo> = {
  id?: Resolver<Scalars['Int'], ParentType, Context>,
  content?: Resolver<Scalars['String'], ParentType, Context>,
};

export type UserResolvers<Context = any, ParentType = User> = {
  name?: Resolver<Scalars['String'], ParentType, Context>,
};

export type IResolvers<Context = any> = {
  Mutation?: MutationResolvers<Context>,
  Query?: QueryResolvers<Context>,
  Todo?: TodoResolvers<Context>,
  User?: UserResolvers<Context>,
};

export type IDirectiveResolvers<Context = any> = {};
