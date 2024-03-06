import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../constants/routes';

import SharedLayout from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage/AboutPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path={routes.MAIN_PAGE} element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.ABOUT_PAGE} element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
