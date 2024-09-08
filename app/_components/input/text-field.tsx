import React from "react";
import Input from "./input";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelClassName?: string;
}

export default function TextField({
  label,
  labelClassName,
  ...props
}: TextFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id} className={labelClassName}>
        {label}
      </label>
      <Input
        id={props.id}
        name={props.id}
        type={props.id}
        {...props}
        required
      />
    </div>
  );
}
