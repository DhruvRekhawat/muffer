"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }:{children:any}) {
  return (
    <ReactLenis root options={{ lerp: 1, duration: 2, syncTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;