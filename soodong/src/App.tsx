import React from "react";

const App = () => (
  <>
    <h1>Hello React by Production Mode...</h1>
    <h1 style={{ color: "tomato" }}>{process.env.NODE_ENV}</h1>
  </>
);

export default App;
