import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import TaskRow from "../components/TaskRow";

export default function Tasklist() {
  const { tasks } = useContext(GlobalContext);

  return (
    <div className="task-page">
      <h1>Lista delle Task</h1>
      <table className="task-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Status</th>
            <th>Data di Creazione</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
