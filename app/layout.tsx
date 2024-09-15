import type { Metadata } from "next";
import "./globals.css";
import { pretendard } from "@assets/fonts";
import Nav from "./_components/nav";

export const metadata: Metadata = {
  title: "ChartQ",
  description: "Chart Data Analysis Platform",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} antialiased`}>
        <Nav />
        <div className="h-screen pt-16 overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
