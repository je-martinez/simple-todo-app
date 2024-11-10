import { SearchIcon } from "../icons/SearchIcon";
import { Banner } from "./Banner";

export const Header = () => {
  return (
    <header>
      <nav className="p-6">
        <div className="flex justify-between items-center">
          <h1 className="pr-6 border-r-2 text-2xl font-bold text-gray-500">
            Simple Todo App
          </h1>
          <div className="flex justify-between flex-grow">
            <div className="flex ml-6 items-center">
              <span>
                <SearchIcon />
              </span>
              <input
                className="outline-none text-sm flex-grow bg-white-50"
                type="text"
                placeholder="Search your Todos"
              />
            </div>
            <div className="md:flex space-x-6 hidden">
              <span className="text-gray-500 text-md">+ Add a new Todo</span>
            </div>
          </div>
        </div>
      </nav>
      <Banner />
    </header>
  );
};
