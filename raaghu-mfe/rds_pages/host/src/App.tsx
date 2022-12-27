import React, { Suspense } from "react";
import Main from "./Main";

const App = () => {
  return (
    <Suspense>
      <Main></Main>
    </Suspense>
  );
};

export default App;
