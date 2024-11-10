import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  return (
    <div className="grid sm:grid-cols-3 gap-4 grid-cols-2">
      <TodoItem title="Todo 1" date={new Date()} />
      <TodoItem title="Todo 2" date={new Date()} />
      <TodoItem title="Todo 3" date={new Date()} />
      <TodoItem title="Todo 4" date={new Date()} />
      <TodoItem title="Todo 5" date={new Date()} />
    </div>
  );
};
