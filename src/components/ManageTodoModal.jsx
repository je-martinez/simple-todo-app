import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useStore } from "../hooks/useStore";
import { Modal } from "./Modal";

export const ManageTodoModal = ({
  id = undefined,
  isOpen = false,
  onClose = undefined,
}) => {
  const { get, update, create } = useStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: "",
      name: "",
      description: "",
    },
  });

  useEffect(() => {
    if (id) {
      const todo = get(id);
      reset(todo);
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const onSubmit = (todo) => {
    if (id) {
      update(todo);
    } else {
      create(todo);
    }
    if (onClose) onClose();
    reset();
  };

  const handleSkip = () => {
    if (onClose) onClose();
    reset();
  };

  return (
    <Modal isOpen={isOpen}>
      <div className="m-8 my-20 max-w-[400px] mx-auto">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-extrabold">
            {id ? "Edit Todo" : "Add a new Todo"}
          </h1>
          <p className="text-gray-600">
            Create a new todo by entering the name of the todo in the input
            field below.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block mb-2 text-sm text-slate-600">Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Add a name for your Todo"
            />
            {errors.name && (
              <span className="text-red-600 text-sm">Name is required</span>
            )}
          </div>
          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block mb-2 text-md text-slate-600">
              Description (optional)
            </label>
            <textarea
              {...register("description", { required: false })}
              type="text"
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Add a description for your Todo"
            />
          </div>
          <button
            type="submit"
            className="p-3 bg-gray-600 rounded-full text-white w-full font-semibold"
          >
            {id ? "Update Todo" : "Add Todo"}
          </button>
          {onClose && (
            <button
              type="button"
              className="p-3 bg-white border rounded-full w-full font-semibold"
              onClick={handleSkip}
            >
              Skip
            </button>
          )}
        </form>
      </div>
    </Modal>
  );
};
