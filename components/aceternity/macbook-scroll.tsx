"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const MacbookScroll = ({
  title,
  badge,
  src,
  showGradient,
}: {
  src?: string;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
  showGradient?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <div
      ref={ref}
      className="w-full flex items-center justify-center overflow-hidden rounded-md antialiased"
    >
      <motion.div
        style={{
          y,
          opacity,
        }}
        className="relative z-10"
      >
        <div className="relative">
          {/* MacBook Frame */}
          <div className="relative mx-auto h-[400px] w-[600px] rounded-[2.5rem] border border-gray-800 bg-gray-900 p-2 shadow-2xl">
            {/* Screen */}
            <div className="relative h-full w-full rounded-[2rem] bg-gray-800 overflow-hidden">
              {/* Content */}
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-4">{title || "AstroBits Core"}</h3>
                  {badge && <div className="mb-4">{badge}</div>}
                  <p className="text-lg opacity-90">MCP-Powered Development</p>
                </div>
              </div>
            </div>
            
            {/* Camera */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-700 rounded-full"></div>
          </div>
          
          {/* Base */}
          <div className="relative mx-auto mt-2 h-4 w-[700px] rounded-[1rem] bg-gray-900 border border-gray-800"></div>
        </div>
      </motion.div>
      
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/0 to-gray-900/0" />
      )}
    </div>
  );
};