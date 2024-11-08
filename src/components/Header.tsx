import { useTaskStore } from "../store/useTaskStore";

const Header = () => {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <div>
      <h1>Header</h1>
      <pre>{JSON.stringify(tasks, null, 2)}</pre>
    </div>
  );
};

export default Header;
