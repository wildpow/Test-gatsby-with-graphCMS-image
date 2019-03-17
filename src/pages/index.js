import React from 'react';
import { graphql } from 'gatsby';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import GraphImg from 'graphcms-image';
import Layout from '../components/layout';

// This query is executed at build time by Gatsby.
export const GatsbyQuery = graphql`
  {
    gcms {
      allPandaLogoes {
        id
        altText
        logoImage {
          handle
          id
          width
          height
        }
      }
    }
  }
`;

// This query is executed at run time by Apollo.

export default data => (
  <Layout data={data}>
    <h1>Home</h1>
  </Layout>
);
