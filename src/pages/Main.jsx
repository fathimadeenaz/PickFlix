import { Route, Routes } from "react-router-dom";

import { Home, Catalog, Detail } from "./index";

const Main = () => {
  return (
    <Routes>
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="/:category" element={<Catalog />} />
      <Route path="/" exact element={<Home />} />
    </Routes>
  );
};

export default Main;
