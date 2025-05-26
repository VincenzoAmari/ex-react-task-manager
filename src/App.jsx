import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Tasklist from "./pages/TaskList";
import AddTask from "./pages/AddTask";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
