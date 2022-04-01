import React from "react";

import { Routes, Route } from "react-router-dom";
import { Example2 } from "../examples/example-2-state/Example2";
import TestComponent from "../examples/example1-react-jsx/Example1";
import { Homepage } from "../pages/Homepage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/example-1" element={<TestComponent />} />
      <Route path="/example-2" element={<Example2 />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};
