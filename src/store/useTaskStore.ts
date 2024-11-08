import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

export interface TaskState {
  tasks: Task[];
  setTask: (name: string) => void;
  deleteTask: (id: number) => void;
}

const taskStore: StateCreator<TaskState> = (set) => ({
  tasks: [],

  setTask: (name) => {

    const newTask = {
      id: Date.now(), 
      name,
      completed: false,
    };
    set((state) => ({ tasks: [...state.tasks, newTask] }));
  },

  deleteTask: (id) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },
});

export const useTaskStore = create<TaskState>()(devtools(taskStore));
