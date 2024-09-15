import Link from "next/link";
import { createClient } from "@utils/supabase/server";
import { PrimaryButton, PrimaryLinkButton } from "./primary";

export default async function AuthButton() {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  return user ? (
    <form action="/auth/signout" method="post">
      <PrimaryButton type="submit" className="w-full">
        로그아웃
      </PrimaryButton>
    </form>
  ) : (
    <PrimaryLinkButton href={"/auth/login"}>로그인</PrimaryLinkButton>
  );
}
