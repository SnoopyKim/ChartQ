"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import chartgif from "@assets/gifs/chart.gif";

export default function FirstHeroPage() {
  return (
    <motion.section
      className={`w-full h-full inset-0 flex items-center justify-between px-20`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.0 }}
    >
      <div className="flex flex-col">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-br from-primary-dark via-primary via-30% to-accent to-90% text-9xl">
          ChartQ
        </h1>
        <h1 className={"ml-2 text-5xl"}>차트의 모든 것</h1>
        <p className={"ml-2 text-xl mt-8 whitespace-pre-line"}>
          {"이전과는 전혀 다른 방식으로 시장에 도전하세요!"}
        </p>
      </div>

      <div className="relative w-1/2 h-1/2">
        <Image
          src={chartgif}
          unoptimized
          priority
          fill
          alt={"chartq"}
          style={{ objectFit: "contain" }}
        />
      </div>
    </motion.section>
  );
}
