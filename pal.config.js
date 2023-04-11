module.exports = {
  schema: {
    path: "path/to/prisma/schema.prisma",
  },
  documents: {
    path: "src/graphql",
    extensions: ["graphql", "gql"],
  },
  output: {
    path: "src/generated",
    extension: "ts",
    typegen: true,
  },
};
