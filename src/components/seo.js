import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import favicon from 'images/logo.png';

const SiteSeo = ({ title, children }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          keywords
          author
          themeColor
        }
      }
    }
  `);

  return (
    <>
      <title>
        {siteMetadata.title} | {title}
      </title>

      <link rel='shortcut icon' href={favicon} />

      <meta name='description' content={siteMetadata.description} />
      <meta name='keywords' content={siteMetadata.keywords} />
      <meta name='author' content={siteMetadata.author} />
      <meta name='theme-color' content={siteMetadata.themeColor} />

      {children}
    </>
  );
};

export default SiteSeo;
