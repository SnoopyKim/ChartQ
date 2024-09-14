"use client";

import React, { useState, useEffect } from "react";
import Nav from "../_components/nav";
import FirstHeroPage from "./_page/first";
import { AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  const [isScrolling, setIsScrolling] = useState(false);

  // 특정 페이지 컨테이너 영역에서만 스크롤 이벤트 감지
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (isScrolling) return; // 페이지 전환 중이면 새로운 스크롤 이벤트를 무시

      if (event.deltaY > 0 && currentPage < totalPages) {
        setCurrentPage((prev) => prev + 1);
        setIsScrolling(true);
      } else if (event.deltaY < 0 && currentPage > 1) {
        setCurrentPage((prev) => prev - 1);
        setIsScrolling(true);
      }
    };

    // 페이지 영역에서만 스크롤 이벤트 적용
    const pageContainer = document.getElementById("page-container");
    if (pageContainer) {
      pageContainer.addEventListener("wheel", handleScroll);
    }

    // 일정 시간 후 스크롤 가능 상태로 변경
    const scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 1200); // 페이지 전환이 완료되기 전까지 대기 (800ms)

    return () => {
      if (pageContainer) {
        pageContainer.removeEventListener("wheel", handleScroll);
      }
      clearTimeout(scrollTimeout);
    };
  }, [currentPage, isScrolling, totalPages]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <FirstHeroPage />;

      default:
        return <FirstHeroPage />;
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <Nav />
      {/* Page Container */}
      <div id="page-container" className="relative h-full">
        <AnimatePresence mode="wait">{renderCurrentPage()}</AnimatePresence>
      </div>

      {/* Scroll Indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 flex flex-col items-center space-y-4">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <div
            key={idx + 1}
            onClick={() => setCurrentPage(idx + 1)}
            className={`cursor-pointer w-3 h-3 rounded-full ${
              currentPage === idx + 1
                ? "bg-neutral dark:bg-secondary"
                : "bg-gray"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
