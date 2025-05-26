import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Tasklist() {
  const { tasks } = useContext(GlobalContext);
  console.log("task:", tasks);
  return (
    <div>
      <h1>qui ci sono le task</h1>
      <p>lista delle task</p>
    </div>
  );
}
