// 1
const { PrismaClient } = require("@prisma/client");

// 2
const prisma = new PrismaClient();

function postedBy(parent, args, context) {
  return context.prisma.link.findOne({ where: { id: parent.id } }).postedBy();
}

module.exports = {
  postedBy,
};
