import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import "./App.css";
import { A } from "./A";
import { B } from "./B";

function App() {
  return (
    <>
      <h2>Színező, natív redux segítségével</h2>
      <B />

      <A />
    </>
  );
}
export default App;
