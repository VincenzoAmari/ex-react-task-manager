import { memo } from "react";
import { Link } from "react-router-dom";

const TaskRow = memo(({ task }) => {
  const status = task.status.toLowerCase();

  const className =
    status === "to do"
      ? "row-todo"
      : status === "doing"
      ? "row-doing"
      : status === "done"
      ? "row-done"
      : "";

  return (
    <tr className={className}>
      <td>
        <Link to={`/task/${task.id}`}>{task.title}</Link>
      </td>
      <td>{task.status}</td>
      <td>{new Date(task.createdAt).toLocaleDateString()}</td>
    </tr>
  );
});

export default TaskRow;
