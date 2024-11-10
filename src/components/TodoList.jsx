import { useState } from "react";
import { useStore } from "../hooks/useStore";
import { ManageTodoModal } from "./ManageTodoModal";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const [todoEdit, setTodoEdit] = useState(null);
  const { todos } = useStore();

  const handlerOnClick = (id) => setTodoEdit(id);
  const onClose = () => setTodoEdit(null);

  return (
    <div className="grid sm:grid-cols-3 gap-4 grid-cols-2">
      <ManageTodoModal id={todoEdit} isOpen={todoEdit} onClose={onClose} />
      {todos.map(({ id, name, description, date }) => (
        <TodoItem
          key={id}
          id={id}
          title={name}
          description={description}
          date={date}
          onClick={handlerOnClick}
        />
      ))}
    </div>
  );
};
