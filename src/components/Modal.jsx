import { useEffect } from "react";
import { CloseIcon } from "../icons/CloseIcon";

export const Modal = ({ isOpen, children, onClose = undefined }) => {
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.classList.add("no-scroll");
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.classList.remove("no-scroll");
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.classList.remove("no-scroll");
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  if (!isOpen) return null;

  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
      <div className="relative max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
        {onClose && (
          <button onClick={onClose} className="p-4 absolute top-5 right-5">
            <CloseIcon size={16} />
          </button>
        )}
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};
