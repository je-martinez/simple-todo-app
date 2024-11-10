import { format } from "date-fns";

export const TodoItem = ({ title, date, updated = false }) => {
  return (
    <div>
      <div className="bg-gray-300 h-44"></div>
      <h3 className="text-lg font-semibold text-gray-500 mt-2">
        {title}
        <span className="text-gray-700 text-sm">
          , {updated ? "updated" : "created"} at {format(date, "yyy-MM-dd")}
        </span>
      </h3>
    </div>
  );
};
