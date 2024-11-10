import { Modal } from "./Modal";

export const ManageTodoModal = ({
  id = undefined,
  isOpen = false,
  onClose = undefined,
}) => {
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
        <div className="space-y-4">
          <div className="w-full max-w-sm min-w-[200px]">
            <label className="block mb-2 text-md text-slate-600">Todo</label>
            <textarea
              type="text"
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Add a description for your Todo"
            />
          </div>
          <button className="p-3 bg-gray-600 rounded-full text-white w-full font-semibold">
            {id ? "Update Todo" : "Add Todo"}
          </button>
          {onClose && (
            <button
              className="p-3 bg-white border rounded-full w-full font-semibold"
              onClick={onClose}
            >
              Skip
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};
