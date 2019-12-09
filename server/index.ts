import Koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';
import { typeDefs, resolvers } from './interface/graphql/schema';

const server = new ApolloServer({ typeDefs, resolvers });

const app = new Koa();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);
