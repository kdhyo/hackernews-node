async function feed(parent, args, context, info) {
  const where = args.filter
    ? {
        OR: [{ description: { contains: args.filter } }, { url: { contains: args.filter } }],
      }
    : {};

  const link = await context.prisma.link.findMany({
    where,
  });

  return link;
}

module.exports = {
  feed,
};
