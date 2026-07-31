import { motion } from "framer-motion";

export default function Background() {

  return (
    <>
      <motion.div

        animate={{
          x:[-80,80,-80],
          y:[-50,50,-50]
        }}

        transition={{
          duration:20,
          repeat:Infinity
        }}

        className="fixed
        top-[-200px]
        left-[-150px]
        w-[500px]
        h-[500px]
        rounded-full
        blur-[130px]
        bg-pink-500/30
        -z-10"
      />

      <motion.div

        animate={{
          x:[50,-50,50],
          y:[80,-80,80]
        }}

        transition={{
          duration:24,
          repeat:Infinity
        }}

        className="fixed
        bottom-[-180px]
        right-[-180px]
        w-[550px]
        h-[550px]
        rounded-full
        blur-[140px]
        bg-fuchsia-500/20
        -z-10"
      />
    </>
  );
}