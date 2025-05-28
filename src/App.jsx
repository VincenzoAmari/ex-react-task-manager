import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Tasklist from "./pages/TaskList";
import AddTask from "./pages/AddTask";
import TaskDetail from "./pages/TaskDetail";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="app-container">
          <nav className="navbar">
            <NavLink to="/" className="nav-link">
              Lista Task
            </NavLink>
            <NavLink to="/add" className="nav-link">
              Aggiungi Task
            </NavLink>
          </nav>

          <main className="content">
            <Routes>
              <Route path="/" element={<Tasklist />} />
              <Route path="/add" element={<AddTask />} />
              <Route path="/task/:id" element={<TaskDetail />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
