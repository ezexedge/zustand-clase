// /src/components/TaskManager.tsx
import React, { useState } from "react";
import { useTaskStore } from "../store/useTaskStore";

const TaskManager = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const setTask = useTaskStore((state) => state.setTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim()) {
      setTask(input);
      setInput("");
    }
  };

  return (
    <div>
      <h2>Gestión de Tareas</h2>
      <input
        type="text"
        placeholder="Escribe una tarea..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTask}>Crear Tarea</button>

      <div style={{ marginTop: "20px" }}>
        {tasks.map((task) => (
          <div key={task.id} style={{ marginBottom: "10px" }}>
            <h3>Tarea: {task.name}</h3>
            <button onClick={() => deleteTask(task.id)}>Borrar Tarea</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
