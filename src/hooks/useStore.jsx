import { useContext } from "react";
import { AppContext } from "../providers/Store";
import { v4 as uuidv4 } from "uuid";

export const useStore = () => {
  const { todos, setTodos } = useContext(AppContext);

  const create = ({ name }) => {
    setTodos((prev) => [...prev, { id: uuidv4(), name, updated: false }]);
  };

  const update = ({ id, name }) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, name, updated: true } : todo
      )
    );
  };

  const remove = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return { todos, create, update, remove };
};
