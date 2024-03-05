import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Main } from './MainSection.styled';

const MainSection = () => {
  return (
    <Main>
      <Suspense fallback={<p>loading...</p>}>
        <Outlet />
      </Suspense>
    </Main>
  );
};

export default MainSection;
