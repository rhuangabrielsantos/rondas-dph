import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import ImportantLinks from "./pages/ImportantLinks";
import SpeakBalloons from "./pages/SpeakBalloons";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/important-links" element={<ImportantLinks />} />
        <Route path="/speak-balloons" element={<SpeakBalloons />} />
      </Routes>
    </BrowserRouter>
  );
}
