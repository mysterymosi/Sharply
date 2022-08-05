import { motion } from "framer-motion";
import { useMediaQuery } from "./hooks";

export function FadeInWhenVisible({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}>
      {children}
    </motion.div>
  );
}
export function EnterFromLeft({ children }: { children: React.ReactNode }) {
  const isSmall = useMediaQuery("(max-width: 480px)");
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      animate={
        isSmall
          ? {
              x: ["50px", "0px", "0px"],
            }
          : { x: ["100px", "0px", "0px"] }
      }
      transition={{
        type: "tween",
        duration: 0.7,
      }}>
      {children}
    </motion.div>
  );
}
export function EnterFromRight({ children }: { children: React.ReactNode }) {
  const isSmall = useMediaQuery("(max-width: 480px)");
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      animate={
        isSmall
          ? {
              x: ["0px", "50px", "0px"],
            }
          : { x: ["0px", "100px", "0px"] }
      }
      transition={{
        type: "tween",
        duration: 0.7,
      }}>
      {children}
    </motion.div>
  );
}
