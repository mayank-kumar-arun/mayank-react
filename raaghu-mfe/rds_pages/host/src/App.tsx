import { Link} from "react-router-dom";
import React, { Suspense } from "react";
import Main from "./Main";

const App = () => {
  return (
    <Suspense fallback={null}>
      <div>
        <Link to={"/forgot-password"}> hi</Link>
        <Main />
      </div>
    </Suspense>
  );
};

export default App;
