module.exports = {
  test: /\.(graphql|gql)$/,
  use: [
    {
      loader: 'graphql-tag/loader',
    },
  ],
};
