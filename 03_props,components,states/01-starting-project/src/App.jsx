import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

import { Fragment } from "react";

function App() {

  return (
    <>
      {/* <Fragment> */}
      <Header />

      <main>
        <CoreConcepts />
        <Examples />
      </main>
      {/* </Fragment> */}
    </>

  );
}

export default App;
