"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  {
    id: 1,
    title: "Let's Read Together",
    description:
      "Let your child open the magic world of books, full of good miracles, bright adventures, brave heroes, and real friendship.",
  },
  {
    id: 2,
    title: "Explore Our Products",
    description:
      "Discover a variety of products designed to boost your knowledge and reading experience.",
  },
  {
    id: 3,
    title: "Contact Us",
    description:
      "Reach out to us for any inquiries or support. We are here to help you.",
  },
];

const Hero = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = pages.length;
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

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Navbar (고정) */}
      <nav className="fixed top-0 w-full flex justify-between items-center p-4 bg-transparent z-20">
        <div className="flex space-x-8">
          <div className="text-2xl font-bold text-white">ChartQ</div>
          <a href="#" className="hover:text-gray-300">
            Product
          </a>
          <a href="#" className=" hover:text-gray-300">
            Blog
          </a>
          <a href="#" className=" hover:text-gray-300">
            Price
          </a>
        </div>
        <div>
          <a
            href="#"
            className="text-secondary bg-primary-dark px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            Login
          </a>
        </div>
      </nav>

      {/* Page Container */}
      <div id="page-container" className="relative h-full">
        <AnimatePresence mode="wait">
          {pages.map(
            (page) =>
              currentPage === page.id && (
                <motion.section
                  key={page.id}
                  className={`absolute inset-0 flex items-center justify-center`}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -100 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="container mx-auto px-4 text-center">
                    <motion.h1 className={`text-6xl font-bold mb-8`}>
                      {page.title}
                    </motion.h1>
                    <motion.p className={`text-lg max-w-2xl mx-auto mb-8`}>
                      {page.description}
                    </motion.p>
                  </div>
                </motion.section>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 flex flex-col items-center space-y-4">
        {pages.map((page) => (
          <div
            key={page.id}
            onClick={() => setCurrentPage(page.id)}
            className={`cursor-pointer w-3 h-3 rounded-full ${
              currentPage === page.id
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
