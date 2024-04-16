import { typeDefs } from "./schema/type-defs.js";
import { resolvers } from "./schema/resolvers.js";
import { ApolloServer } from "apollo-server";
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return { req };
  },
});

server
  .listen({
    port: 6969,
  })
  .then(({ url }) => {
    console.log(`server is running at url: ${url}`);
  });
