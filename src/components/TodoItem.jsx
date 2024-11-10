import { format } from "date-fns";
import { ImageWithPlaceholder } from "./ImageWithPlaceholder";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { AvatarPlaceholder } from "./AvatarPlaceholder";

export const TodoItem = ({
  id,
  title,
  description,
  date,
  onClick = undefined,
}) => {
  const handleOnClick = () => () => {
    onClick ? onClick(id) : null;
  };

  return (
    <div
      className={`flex justify-center items-center ${onClick ? "cursor-pointer" : ""}`}
      onClick={handleOnClick()}
    >
      <div className="w-full mx-auto">
        <div className="block mb-4 mx-auto border-slate-300 pb-2">
          <div className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 w-full h-32 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
              <ImageWithPlaceholder
                placeholder={<PhotoPlaceholder />}
                src={`https://picsum.photos/1471/400?random=${id}`}
                alt="ui/ux review check"
                className={"h-32"}
              />
            </div>
            <div className="p-6">
              <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {title}
              </h4>
              <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                {description}
              </p>
            </div>
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center -space-x-3">
                <ImageWithPlaceholder
                  placeholder={<AvatarPlaceholder />}
                  src={`https://avatar.iran.liara.run/public/boy?username=${id}`}
                  className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center"
                />
                <ImageWithPlaceholder
                  placeholder={<AvatarPlaceholder />}
                  src={`https://avatar.iran.liara.run/public/girl?username=${id}`}
                  className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center"
                />
              </div>
              <p className="block font-sans text-sm antialiased font-normal leading-relaxed text-inherit">
                {format(date, "LLLL dd, hh:mm")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
