import { signin, signup } from "./actions";
import { PrimaryButton } from "@components/button";
import { TextField } from "@components/input";

export default function LoginPage() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <form className="flex flex-col gap-4">
        <TextField label="Email" id="email" type="email" required />
        <TextField label="Password" id="password" type="password" required />
        <PrimaryButton formAction={signin}>Sign in</PrimaryButton>
        <PrimaryButton formAction={signup}>Sign up</PrimaryButton>
      </form>
    </div>
  );
}
