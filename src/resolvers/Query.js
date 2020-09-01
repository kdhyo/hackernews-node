// 1
const { PrismaClient } = require("@prisma/client");
// 2
const prisma = new PrismaClient();

function feed(parent, args, context, info) {
  return context.prisma.link.findMany();
}

module.exports = {
  feed,
};
