import { useState, useRef, useMemo, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

export default function AddTask() {
  const { addTask } = useContext(GlobalContext);

  const [taskTitle, setTaskTitle] = useState("");
  const descriptionRef = useRef();
  const statusRef = useRef();

  const taskTitleError = useMemo(() => {
    if (!taskTitle.trim()) return "Il nome della task non può essere vuoto.";
    if ([...taskTitle].some((ch) => symbols.includes(ch)))
      return "Il nome della task non può contenere simboli.";
    return "";
  }, [taskTitle]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskTitleError) return;

    const newTask = {
      title: taskTitle.trim(),
      description: descriptionRef.current.value,
      status: statusRef.current.value,
    };

    try {
      await addTask(newTask);
      alert("task creata con successo");
      setTaskTitle("");
      descriptionRef.current.value = "";
      statusRef.current.value = "To do";
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="add-task-container">
      <h1 className="form-title">Aggiungi una Task</h1>
      <form onSubmit={handleSubmit} className="add-task-form">
        <label className="form-label">
          Nome Task:
          <input
            className="form-input"
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
        </label>
        {taskTitleError && <p className="form-error">{taskTitleError}</p>}

        <label className="form-label">
          Descrizione:
          <textarea className="form-textarea" ref={descriptionRef} />
        </label>

        <label className="form-label">
          Stato:
          <select className="form-select" ref={statusRef} defaultValue="To do">
            {["To do", "Doing", "Done"].map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>

        <button className="form-button" type="submit" disabled={taskTitleError}>
          Aggiungi Task
        </button>
      </form>
    </div>
  );
}
