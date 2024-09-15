import Link from "next/link";
import AuthButton from "../button/auth";
import { Suspense } from "react";

export default async function Nav() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-transparent z-20">
      <div className="flex space-x-8 items-center">
        <Link href="/" className="text-2xl font-bold text-secondary">
          LOGO
        </Link>
        {/* <Link href="/product" className="hover:underline underline-offset-2">
          Product
        </Link> */}
        <Link href="https://chartget.co.kr/" className="hover:underline">
          Blog
        </Link>
        <Link href="/game" className="hover:underline">
          Game
        </Link>
      </div>
      <div>
        <Suspense fallback={<></>}>
          <AuthButton />
        </Suspense>
      </div>
    </nav>
  );
}
