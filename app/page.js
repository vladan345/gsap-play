"use client";
import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const comp = useRef();
  const heading = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".heading", {
        scale: 60,
        left: "-140%",
        scrollTrigger: {
          trigger: ".app",
          markers: true,
          scrub: 1,
          start: "34% bottom",
          end: "bottom bottom",
        },
      });
      gsap.to(".video", {
        scale: 1.5,
        scrollTrigger: {
          trigger: ".app",
          markers: true,
          scrub: 1,
          start: "34% bottom",
          end: "bottom bottom",
        },
      });
    }, comp.current);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp}>
      <main className="app h-[300vh]">
        <div className="isSticky w-full h-screen sticky top-0 left-0 overflow-hidden">
          <video
            src="/bg.mp4"
            className="video w-full h-screen object-cover absolute left-0 top-0"
            autoPlay
            loop
            muted
          ></video>
          <h1 className="heading scale-[1] text-[260px] text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center bg-black mix-blend-multiply">
            Hello GSAP
          </h1>
        </div>
      </main>
      <div className="h-screen bg-white w-full"></div>
    </div>
  );
}
