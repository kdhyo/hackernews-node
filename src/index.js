import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import User from "./resolvers/User";
import Link from "./resolvers/Link";
import Subscription from "./resolvers/Subscription";
import Vote from "./resolvers/Vote";

import { GraphQLServer, PubSub } from "graphql-yoga";
import { PrismaClient } from "@prisma/client";

//prisma 클라이언트 연결용
const prisma = new PrismaClient();

//실시간 채팅에 대해서 배워봅시당.
const pubsub = new PubSub();

const resolvers = {
  Query,
  Mutation,
  User,
  Link,
  Subscription,
  Vote,
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: (request) => {
    return {
      ...request,
      prisma,
      pubsub,
    };
  },
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
