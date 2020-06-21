import React, { useContext } from 'react';

import { HomepageContext } from '../../contexts/homepage/homepage.context';

import ManageYourTimePreview from '../../components/manage-your-time-preview/manage-your-time-preview.component';

import Introduction from '../../components/introduction/introduction.component';

const Homepage = () => {
  const { state } = useContext(HomepageContext);

  return state.canRender ? <ManageYourTimePreview /> : <Introduction />;
};

export default Homepage;
