import { useMemo, useState } from "react";
import { useStore } from "../hooks/useStore";
import { SearchIcon } from "../icons/SearchIcon";
import { ManageTodoModal } from "./ManageTodoModal";
import { TodoItem } from "./TodoItem";
import { useForm } from "react-hook-form";

export const TodoList = () => {
  const [todoEdit, setTodoEdit] = useState(null);
  const { search } = useStore();

  const { register, watch } = useForm({
    defaultValues: {
      query: "",
    },
  });

  const handlerOnClick = (id) => setTodoEdit(id);
  const onClose = () => setTodoEdit(null);
  const query = watch("query");
  const todos = useMemo(() => search(query), [search, query]);

  return (
    <>
      <form className="flex ml-6 items-center mb-8">
        <span>
          <SearchIcon />
        </span>
        <input
          {...register("query")}
          className="outline-none text-sm flex-grow bg-white-50"
          type="text"
          placeholder="Search your Todos"
        />
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
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
    </>
  );
};
