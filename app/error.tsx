"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { PrimaryButton } from "./_components/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <div className="flex flex-col gap-4">
        <h2 className="text-center">
          <span role="img">❗</span>
          {error.message.split("\n")[0]}
          <span role="img">❗</span>
          <br />
          {error.message.split("\n")[1]}
        </h2>
        <PrimaryButton
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </PrimaryButton>
      </div>
    </div>
  );
}
