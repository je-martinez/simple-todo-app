import { useContext } from "react";
import { AppContext } from "../providers/Store";
import { v4 as uuidv4 } from "uuid";

export const useStore = () => {
  const { todos, setTodos } = useContext(AppContext);

  const get = (id) => todos.find((todo) => todo.id === id);

  const create = ({ name, description }) => {
    setTodos((prev) => [
      ...prev,
      { id: uuidv4(), name, description, date: new Date() },
    ]);
  };

  const update = ({ id, name, description }) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, name, description, date: new Date() } : todo
      )
    );
  };

  const remove = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const search = (query) => {
    return todos.filter((todo) =>
      todo.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  return { todos, get, create, update, remove, search };
};
