export const Banner = () => {
  return (
    <div className="container mx-auto bg-gray-400 h-96 rounded-md flex items-center">
      <div className="sm:ml-20 text-gray-50 text-center sm:text-left">
        <h1 className="text-5xl font-bold mb-4">
          Create your own <br />
          Todos.
        </h1>
        <p className="text-lg inline-block sm:block">
          This is just an example of a Todo App
        </p>
      </div>
    </div>
  );
};
