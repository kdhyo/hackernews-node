const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

function links(parent, args, context) {
  return context.prisma.user.findOne({ where: { id: parent.id } }).links();
}

module.exports = {
  links,
};
