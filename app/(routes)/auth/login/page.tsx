import clsx from "clsx";
import { signin, signup } from "./actions";

export default function LoginPage() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className={clsx(
              "px-4 py-2 bg-secondary rounded ring-neutral ring-1 outline-none caret-neutral text-neutral",
              "focus:ring-primary focus:ring-2"
            )}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className={clsx(
              "px-4 py-2 bg-secondary rounded ring-neutral ring-1 outline-none caret-neutral text-neutral",
              "focus:ring-primary focus:ring-2"
            )}
            required
          />
        </div>
        <button
          formAction={signin}
          className="px-4 py-2 rounded bg-primary text-secondary hover:bg-primary-dark"
        >
          Sign in
        </button>
        <button
          formAction={signup}
          className="px-4 py-2 rounded bg-primary text-secondary hover:bg-primary-dark"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}
