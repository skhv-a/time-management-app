import React, { useContext } from 'react';

import { HomepageContext } from '../../contexts/homepage/homepage.context';

import ManageYourTimePreview from '../../components/manage-your-time-preview/manage-your-time-preview.component';

import { ManageYourTimeProvider } from '../../contexts/manage-your-time-preview/manage-your-time.context';

import Introduction from '../../components/introduction/introduction.component';

const Homepage = () => {
  const { state } = useContext(HomepageContext);

  return state.canRender ? (
    <ManageYourTimeProvider>
      <ManageYourTimePreview />
    </ManageYourTimeProvider>
  ) : (
    <Introduction />
  );
};

export default Homepage;
