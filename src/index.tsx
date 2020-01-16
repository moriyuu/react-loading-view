import React from "react";
import ReactDOM from "react-dom";
import { LoadingView } from "./LoadingView";

const App = () => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        backgroundColor: "#fbfbfb",
        width: "100%",
        height: "100vh",
        padding: "8px 0"
      }}
    >
      <LoadingView />
      <LoadingView />
      <LoadingView />
      <LoadingView />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
