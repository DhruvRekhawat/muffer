import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";

export const VelocityText = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end start"],
  });
  const scrollVelocity = useVelocity(scrollYProgress);
  const skewXRaw = useTransform(
    scrollVelocity,
    [-0.5, 0.5],
    ["45deg", "-45deg"]
  );
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 500 });
  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -3000]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 100 });
  
  return (
    <section
      ref={targetRef}
      className="h-[50vh] mt-12 "
    >
      <div className="sticky top-0 flex h-full items-center justify-center overflow-hidden">
        <div className="relative ">
          {/* Bottom text - "Suffer Nhi" */}
          <motion.p
            style={{ skewX, x }}
            className="origin-bottom-left whitespace-nowrap text-5xl uppercase leading-[0.85] md:text-7xl md:leading-[0.85]
            bg-blue-600 py-4 text-white relative z-10 -rotate-3 translate-y-16"
          >
            <span>
            Suffer Nhi 🙅‍♂️ Suffer Nhi 🙅‍♂️ Suffer Nhi 🙅‍♂️ Suffer Nhi 🙅‍♂️ Suffer Nhi 🙅‍♂️ Suffer Nhi 🙅‍♂️ Suffer Nhi 🙅‍♂️ Suffer Nhi 🙅‍♂️ 
            </span>
          </motion.p>
          
          {/* Top text - "Muffer Karo" */}
          <motion.p
            style={{ skewX, x }}
            className="origin-bottom-left whitespace-nowrap text-5xl uppercase leading-[0.85] md:text-7xl md:leading-[0.85]
            bg-blue-600 py-4 text-white absolute z-20 -rotate-3 top-0 left-0 translate-y-40"
          >
            Muffer Karo 💪 Muffer Karo 💪 Muffer Karo 💪 Muffer Karo 💪 Muffer Karo 💪 Muffer Karo 💪 Muffer Karo 💪
          </motion.p>
        </div>
      </div>
    </section>
  );
}