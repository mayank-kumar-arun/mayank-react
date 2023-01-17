import React, { Suspense } from "react";

import DynamicProperty from "./dynamicProperties/dynamicProperties";

const App = () => (
  <Suspense>
    <DynamicProperty></DynamicProperty>
  </Suspense>
);

export default App;
