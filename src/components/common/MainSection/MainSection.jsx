import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Main, Container } from "./MainSection.styled";

const MainSection = () => {
  return (
    <Main>
      <Container>
        <Suspense fallback={<p>loading...</p>}>
          <Outlet />
        </Suspense>
      </Container>
    </Main>
  );
};

export default MainSection;
