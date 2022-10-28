import { useState } from "react";

import store from "./store";

export function B() {
  const [bgcolor, setBgColor] = useState(store.getState());

  store.subscribe(() => {
    setBgColor(store.getState());
  });

  return (
    <div
      style={{
        border: "2px solid black",
        padding: 50,
        backgroundColor: bgcolor,
      }}
    ></div>
  );
}
