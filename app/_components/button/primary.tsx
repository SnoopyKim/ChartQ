import clsx from "clsx";
import React from "react";

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export default function PrimaryButton({
  className,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded font-semibold bg-primary text-secondary hover:bg-primary-dark ",
        "disabled:bg-gray disabled:pointer-events-none",
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  );
}
