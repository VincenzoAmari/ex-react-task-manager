import { useParams, useNavigate } from "react-router-dom";
import { Component, useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Modal from "../components/Modal";

export default function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, removeTask } = useContext(GlobalContext);

  const task = tasks.find((t) => t.id === parseInt(id));

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  if (!task) {
    return <h2>task non trovata</h2>;
  }

  const handelDelete = async () => {
    try {
      await removeTask(task.id);
      alert("task eliminata con successo");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

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
      <button onClick={() => setShowDeleteModal(true)}>Elimina task</button>
      <Modal
        title="conferma eliminazione"
        content={<p>vuoi eliminare?</p>}
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handelDelete}
        confirmText="Elimina"
      />
    </div>
  );
}
