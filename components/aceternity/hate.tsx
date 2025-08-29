"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export const Hate = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsLiked(!isLiked)}
        className="relative p-4 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
      >
        <motion.div
          animate={{
            scale: isLiked ? [1, 1.2, 1] : 1,
            rotate: isLiked ? [0, 10, -10, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <motion.span
            animate={{ rotate: isLiked ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {isLiked ? "❤️" : "💔"}
          </motion.span>
          <span>{isLiked ? "Love" : "Hate"}</span>
        </motion.div>
        
        <motion.div
          animate={{
            opacity: isLiked ? [0, 1, 0] : 0,
            scale: isLiked ? [0, 1, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
          className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full"
        >
          +1
        </motion.div>
      </motion.button>
    </div>
  );
};