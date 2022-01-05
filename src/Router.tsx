import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import ImportantLinks from "./pages/ImportantLinks";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/important-links" element={<ImportantLinks />} />
      </Routes>
    </BrowserRouter>
  );
}
