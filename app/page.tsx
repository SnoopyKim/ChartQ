import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="flex flex-col gap-2">
        <Link href={"/auth/login"} className="text-2xl font-bold">
          Login
        </Link>
      </div>
    </div>
  );
}
