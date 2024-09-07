import localFont from "next/font/local";

export const pretendard = localFont({
  src: [
    {
      path: "./Pretendard-Light.woff2",
      weight: "300",
    },
    {
      path: "./Pretendard-Regular.woff2",
      weight: "400",
    },
    {
      path: "./Pretendard-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "./Pretendard-Bold.woff2",
      weight: "700",
    },
  ],
});
