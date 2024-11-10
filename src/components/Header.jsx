import { useState } from "react";
import { SearchIcon } from "../icons/SearchIcon";
import { Banner } from "./Banner";
import { ManageTodoModal } from "./ManageTodoModal";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <header>
      <ManageTodoModal isOpen={isOpen} onClose={closeModal} />
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
            <button className="md:flex space-x-6 hidden" onClick={openModal}>
              <span className="text-gray-500 text-md">+ Add a new Todo</span>
            </button>
          </div>
        </div>
      </nav>
      <Banner />
    </header>
  );
};
