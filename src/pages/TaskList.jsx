import { useCallback, useContext, useMemo, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import TaskRow from "../components/TaskRow";

function debounce(callback, delay) {
  let timer;
  return (value) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(value);
    }, delay);
  };
}

export default function Tasklist() {
  const { tasks } = useContext(GlobalContext);

  const [searchQuery, setSearchQuery] = useState("");
  const debounceSetSearchQuery = useCallback(debounce(setSearchQuery, 500), []);

  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState(1);

  const sortIcon = sortOrder === 1 ? "↓" : "↑";

  const handelSort = (field) => {
    if (sortBy === field) {
      setSortOrder((prev) => prev * -1);
    } else {
      setSortBy(field);
      setSortOrder(1);
    }
  };

  const filteredAndSortedTask = useMemo(() => {
    return [...tasks]
      .filter((t) =>
        t.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
      )
      .sort((a, b) => {
        let comparison;

        if (sortBy === "title") {
          comparison = a.title.localeCompare(b.title);
        } else if (sortBy === "status") {
          const statusOptions = ["to do", "doing", "done"];
          const aIndex = statusOptions.indexOf(a.status.toLowerCase());
          const bIndex = statusOptions.indexOf(b.status.toLowerCase());
          comparison = aIndex - bIndex;
        } else if (sortBy === "createdAt") {
          const dateA = new Date(a.createdAt).getTime();
          const dateB = new Date(b.createdAt).getTime();
          comparison = dateA - dateB;
        }

        return comparison * sortOrder;
      });
  }, [tasks, sortBy, sortOrder, searchQuery]);

  return (
    <div className="task-page">
      <h1>Lista delle Task</h1>

      <input
        type="text"
        placeholder="cerca una task"
        onChange={(e) => debounceSetSearchQuery(e.target.value)}
      />

      <table className="task-table">
        <thead>
          <tr>
            <th onClick={() => handelSort("title")}>
              Nome {sortBy === "title" && sortIcon}
            </th>
            <th onClick={() => handelSort("status")}>
              Status {sortBy === "status" && sortIcon}
            </th>
            <th onClick={() => handelSort("createdAt")}>
              Data di Creazione {sortBy === "createdAt" && sortIcon}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredAndSortedTask.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
