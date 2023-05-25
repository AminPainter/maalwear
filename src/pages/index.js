import React from 'react';

import { Catalog } from 'components/home-page';
import SiteSeo from 'components/seo';

const IndexPage = () => (
  <>
    <Catalog />
  </>
);

export default IndexPage;

export const Head = () => <SiteSeo title='Pure 100% Cotton T-Shirts' />;
