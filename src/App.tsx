// /src/App.tsx
import React from "react";
import TaskManager from "./components/TaskManager";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Aplicación de Gestión de Tareas con Zustand</h1>
      <TaskManager />
    </div>
  );
}

export default App;
