import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

export function PrimaryButton({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded font-semibold bg-primary text-secondary hover:bg-primary-dark ",
        "disabled:bg-gray disabled:pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function PrimaryLinkButton({
  href,
  className,
  children,
  ...props
}: LinkProps & { className?: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className={clsx(
        "px-4 py-2 rounded font-semibold bg-primary text-secondary hover:bg-primary-dark ",
        "disabled:bg-gray disabled:pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
