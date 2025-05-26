import { memo } from "react";

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
      <td>{task.title}</td>
      <td>{task.status}</td>
      <td>{new Date(task.createdAt).toLocaleDateString()}</td>
    </tr>
  );
});

export default TaskRow;
