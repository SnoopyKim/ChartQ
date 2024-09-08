import AccountForm from "./account-form";
import { createClient } from "@utils/supabase/server";

export default async function Account() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <AccountForm user={user} />
    </div>
  );
}
