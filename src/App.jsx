import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Tasklist from "./pages/TaskList";
import AddTask from "./pages/AddTask";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <nav>
          <NavLink to="/"> lista task</NavLink>
          <NavLink to="/add"> add Task </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Tasklist />} />
          <Route path="/add" element={<AddTask />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
