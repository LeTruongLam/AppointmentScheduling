import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TheTest from "./pages/TestPage";
import MainLayout from "./layout/MainLayout";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          {/* Auth router */}
          {/* Test functions router */}
          <Route
            path="/test"
            element={
              <MainLayout>
                <TheTest />
              </MainLayout>
            }
          />
          {/* Provider router */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
