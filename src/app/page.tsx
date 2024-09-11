'use client'
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-6">
      <h1 className="text-[50px] font-bold">Framer Motion</h1>
      <motion.div className="h-[150px] bg-red-400 w-[150px]" initial={{ x: -100 }} animate={{ x: 100 }}
        transition={{ duration: 1 }} />

      <motion.div
        className="h-[150px] bg-green-400 w-[150px]"
        animate={{ x: [0, 100, 0] }}
      />
      <motion.div
        className="box bg-blue-300 h-[150px] w-[150px]"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
      />

    </div>
  );
};
