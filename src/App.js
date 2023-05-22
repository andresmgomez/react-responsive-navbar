import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteNavbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<SiteNavbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
