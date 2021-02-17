import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  const artGroups = useStaticQuery(graphql`
    query {
      allContentfulArtGroups {
        edges {
          node {
            title
            artistStatement {
              raw
            }
            description {
              raw
            }
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  if (!artGroups.allContentfulArtGroups.edges) return null;
  console.log(artGroups.allContentfulArtGroups.edges);

  return (
    <Layout className="container">
      {artGroups.allContentfulArtGroups.edges.map(edge => (
        <h1 className="text-salmon font-serif">{edge.node.title}</h1>
      ))}
      
    </Layout>
  )
}

export default IndexPage
