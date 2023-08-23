import { FC, ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";

const Shop = () => {
  return <h1>I'm a shop page...</h1>;
};

const App: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
