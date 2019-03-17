import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
// import { graphql } from 'gatsby';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import GraphImg from 'graphcms-image';

const APOLLO_QUERY = gql`
  {
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
`;
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

const Layout = ({ children }) => (
  <div>
    <div style={{ textAlign: 'center', width: '600px', margin: '50px auto' }}>
      <h1> With His Pupper</h1>
      <p>
        Rick & Morty API data loads at build time. Dog API data loads at run
        time.
      </p>
      <div>
        <StaticQuery
          query={graphql`
            query allThePandas {
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
          `}
          render={data => (
            <div>
              <div
                style={{
                  width: '150px',
                  display: 'flex',
                  direction: 'column',
                  height: '150px',
                }}
              >
                <img
                  width="150"
                  src={`https://media.graphcms.com/resize=w:1905,h:1233,fit:clip/${
                    data.gcms.allPandaLogoes[0].logoImage.handle
                  }`}
                  alt={data.gcms.allPandaLogoes[0].altText}
                />
                Plain image in StaticQuery
              </div>
              <div style={{ width: '150px' }}>
                <GraphImg
                  blurryPlaceholder={false}
                  backgroundColor
                  image={data.gcms.allPandaLogoes[0].logoImage}
                  maxWidth={1905}
                  withWebp
                  alt={data.gcms.allPandaLogoes[0].altText}
                />
              </div>
            </div>
          )}
        />
        <Query query={APOLLO_QUERY}>
          {({ data, loading, error }) => {
            if (loading) return <p>Loading pupper...</p>;
            if (error) return <p>Error: ${error.message}</p>;
            return (
              <>
                <div style={{ width: '150px' }}>
                  <GraphImg
                    blurryPlaceholder={false}
                    backgroundColor
                    image={data.allPandaLogoes[0].logoImage}
                    maxWidth={1905}
                    withWebp
                    alt={data.allPandaLogoes[0].altText}
                  />
                </div>
              </>
            );
          }}
        </Query>
      </div>
    </div>
    <Link to="/page1/">Page 1</Link>
    <Link to="/page2/">Page 2</Link>
    {children}
  </div>
);

export default Layout;
