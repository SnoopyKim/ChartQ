import type { Metadata } from "next";
import "./globals.css";
import { pretendard } from "@/app/_assets/fonts";

export const metadata: Metadata = {
  title: "ChartQ",
  description: "Chart Data Analysis Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className} antialiased`}>{children}</body>
    </html>
  );
}
