import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import User from "./resolvers/User";
import Link from "./resolvers/Link";

import { GraphQLServer } from "graphql-yoga";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Query,
  Mutation,
  User,
  Link,
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: (request) => {
    return {
      ...request,
      prisma,
    };
  },
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
