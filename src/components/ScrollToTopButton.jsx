// "use client";

// import React, { useEffect, useState } from "react";
// import { ChevronUp } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { motion, useScroll } from "motion/react";

// const ScrollToTopButton = () => {
//   const [showButton, setShowButton] = useState(false);
//   const { scrollYProgress } = useScroll();

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowButton(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   if (!showButton) return null;

//   return (
//     <Button
//       size="icon"
//       onClick={scrollToTop}
//       className="fixed bottom-6 right-6 z-50 h-11 w-11 rounded-full shadow-lg"
//       aria-label="Scroll to top"
//     >
//       <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
//         <circle
//           cx="50"
//           cy="50"
//           r="45"
//           stroke="currentColor"
//           strokeWidth="6"
//           fill="none"
//           className="text-muted"
//         />

//         <motion.circle
//           cx="50"
//           cy="50"
//           r="45"
//           stroke="currentColor"
//           strokeWidth="6"
//           fill="none"
//           strokeLinecap="round"
//           className="text-primary"
//           style={{
//             pathLength: scrollYProgress,
//           }}
//         />
//       </svg>
//       <ChevronUp className="h-5 w-5 text-white dark:text-secondary" />
//     </Button>
//   );
// };

// export default ScrollToTopButton;

"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";
import { ArrowUp, ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  if (!showButton) return null;


  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-background shadow-lg border"
    >
      {/* Background Circle */}
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          className="text-muted"
        />

        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          className="text-primary"
          style={{
            pathLength: scrollYProgress,
          }}
        />
      </svg>

      {/* Icon */}
      <ChevronUp className="relative z-10 h-5 w-5" />
    </button>
  );
};

export default ScrollToTopButton;
