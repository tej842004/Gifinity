import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

const FadeInComponent = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        fontSize: "1.5rem",
        margin: "1rem 0",
        maxWidth: "100vw",
        lineHeight: 1.6,
      }}
    >
      {children}
    </motion.p>
  );
};

export default FadeInComponent;
