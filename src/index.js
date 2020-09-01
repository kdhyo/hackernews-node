const { GraphQLServer } = require("graphql-yoga");
import { read, links, update, dete } from "./db";

const typeDefs = "./src/schema.graphql";

const resolvers = {
  Query: {
    links: () => links,
    link: (_, { id }) => read(id),
  },
  Mutation: {
    update: (_, { id, url, description }) => update(id, url, description),
    dete: (_, { id }) => dete(id),
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
