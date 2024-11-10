import { useState } from "react";

export const ImageWithPlaceholder = ({
  src,
  alt,
  placeholder,
  className,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full">
      <div className="relative w-full">
        {!isLoaded && placeholder}
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={`${className} transition-opacity duration-500 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"}`}
          {...props}
        />
      </div>
    </div>
  );
};
