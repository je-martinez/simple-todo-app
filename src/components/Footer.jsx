export const Footer = () => {
  return (
    <footer className="mb-6 px-6 md:px-0 mt-4">
      <div className=" gap-5 grid-cols-5 container mx-auto space-x-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-500">Simple Todo App</h1>
          <p>This is just an example of a Todo App</p>
          <span>© SimpleTodoApp Inc. {new Date().getFullYear()}.</span>
        </div>
      </div>
    </footer>
  );
};
