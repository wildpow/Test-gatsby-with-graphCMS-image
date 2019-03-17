require('dotenv').config();

const { GATSBY_API } = process.env;

module.exports = {
  siteMetadata: {
    title: 'Gatsby With Apollo',
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GCMS',
        fieldName: 'gcms',
        url: GATSBY_API,
      },
    },
  ],
};
