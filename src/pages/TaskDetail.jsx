import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function TaskDetail() {
  const { id } = useParams();
  const { tasks } = useContext(GlobalContext);

  const task = tasks.find((t) => t.id === parseInt(id));

  if (!task) {
    return <h2>task non trovata</h2>;
  }

  const handelDelete = () => console.log("elimino task:", task.id);

  return (
    <div>
      <h1>Dettaglio task</h1>
      <p>
        <strong>Nome:</strong>
        {task.title}
      </p>
      <p>
        <strong>Descrizione:</strong>
        {task.description}
      </p>
      <p>
        <strong>stato:</strong>
        {task.status}
      </p>
      <p>
        <strong>data di creazione:</strong>
        {new Date(task.createdAt).toLocaleDateString()}
      </p>
      <button onClick={handelDelete}>Elimina task</button>
    </div>
  );
}
