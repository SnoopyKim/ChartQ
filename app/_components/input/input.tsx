import clsx from "clsx";
import React from "react";

export default function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={clsx(
        "flex-1 px-4 py-2 bg-secondary rounded ring-neutral ring-1 outline-none caret-neutral text-neutral",
        "focus:ring-primary focus:ring-2",
        "disabled:bg-gray disabled:pointer-events-none",
        className
      )}
      {...props}
    />
  );
}
