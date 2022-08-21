import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage/IndexPage";
import PageWrapper from "./pages/PageWrapper/PageWrapper";
import ScriptsPage from "./pages/ScriptsPage/ScriptsPage";

import "./App.css";
import CreationPage from "./pages/CreationPage/CreationPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
            <Route index element={<IndexPage />} />
            <Route path="scripts" element={<ScriptsPage />} />
            <Route path="create" element={<CreationPage />} />
            <Route path="history" element={<HistoryPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
