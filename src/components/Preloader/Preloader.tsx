"use client";

import { useEffect, useRef } from "react";
import { useTokenPrice } from "@/lib/hooks/useTokenPrices";
import "./preloader.css";

export const Preloader = () => {
  const ref = useRef<HTMLDivElement>(null);
  const svgElement = ref.current?.firstChild as SVGElement | null;
  const paths = svgElement?.querySelectorAll("path");
  const { isLoading } = useTokenPrice();

  useEffect(() => {
    if (!svgElement) return;

    const handleTransitionEnd = (e: TransitionEvent) => {
      const lastAnimatedChild = paths?.[paths.length - 1];
      const isAnimationComplete = e.target === lastAnimatedChild;
      if (!isAnimationComplete) return;

      if (!isLoading) {
        hidePreloader();
      }

      svgElement?.classList.toggle("active");
    };

    svgElement.classList.remove("active");
    svgElement.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      svgElement.removeEventListener("transitionend", handleTransitionEnd);
      svgElement.classList.remove("active");
    };
  }, [isLoading, svgElement]);

  const hidePreloader = () => {
    ref.current?.classList.remove("active");
    ref.current?.addEventListener(
      "transitionend",
      () => setTimeout(() => ref.current?.classList.add("hidden"), 500),
      { once: true }
    );
  };

  return (
    <div
      ref={ref}
      id="preloader"
      className={
        "flex flex-col items-center justify-center fixed inset-0 bg-stone-100 dark:bg-gradient-to-b dark:from-slate-950 dark:to-[#0f0e0e] active"
      }
    >
      <svg
        className="preloader-svg active dark:invert scale-150"
        width={71}
        height={20}
        viewBox="0 0 71 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1002_143359)">
          <path
            d="M6.44189 1.38892L14.1668 5.5V14.4999L6.44189 18.611V1.38892Z"
            fill="black"
            className="svg-elem-1"
          ></path>
          <path
            d="M7.27555 2.775L13.3339 6V13.9972L7.27555 17.2222V2.775ZM5.60889 0V20L15.0006 15V5L5.60889 0Z"
            fill="black"
            className="svg-elem-2"
          ></path>
          <path
            d="M2.80615 0V20L4.20893 19.2528V0.747222L2.80615 0Z"
            fill="black"
            className="svg-elem-3"
          ></path>
          <path
            d="M0 0V20L1.40278 19.2528V0.747222L0 0Z"
            fill="black"
            className="svg-elem-4"
          ></path>
        </g>
        <path
          d="M70.3215 15.0032H64.8613V13.6348L68.2277 9.63887H64.8613V8.24304H70.3215V9.62519L66.9003 13.6074H70.3215V15.0032Z"
          fill="black"
          className="svg-elem-5"
        ></path>
        <path
          d="M57.342 18.1371V16.7413H58.3409C58.9978 16.7413 59.4083 16.5908 59.6957 15.7971L59.8873 15.2907L57.1641 8.24316H58.9294L60.6673 13.1696L62.5011 8.24316H64.2253L60.9136 16.5087C60.4073 17.7676 59.6957 18.2877 58.5873 18.2877C58.122 18.2877 57.7114 18.2329 57.342 18.1371Z"
          fill="black"
          className="svg-elem-6"
        ></path>
        <path
          d="M51.6844 15.0032H49.7822L52.1086 11.6916L49.7822 8.24304H51.7254L53.2171 10.5421L54.6539 8.24304H56.5287L54.2297 11.6642L56.4603 15.0032H54.5445L53.1076 12.7726L51.6844 15.0032Z"
          fill="black"
          className="svg-elem-7"
        ></path>
        <path
          d="M47.3731 15.168C46.771 15.168 46.2646 14.6754 46.2646 14.087C46.2646 13.4848 46.771 12.9922 47.3731 12.9922C47.9752 12.9922 48.4816 13.4848 48.4816 14.087C48.4816 14.6754 47.9752 15.168 47.3731 15.168Z"
          fill="black"
          className="svg-elem-8"
        ></path>
        <path
          d="M39.9566 15.0035H38.2871V8.24335H39.8335L39.9703 9.11917C40.3945 8.43494 41.2156 8.03809 42.1325 8.03809C43.8294 8.03809 44.7052 9.0918 44.7052 10.8434V15.0035H43.0357V11.2403C43.0357 10.1045 42.4746 9.55708 41.6125 9.55708C40.5861 9.55708 39.9566 10.2687 39.9566 11.3634V15.0035Z"
          fill="black"
          className="svg-elem-9"
        ></path>
        <path
          d="M35.0581 8.24316H36.7276V15.0034H35.1812L35.0581 14.1002C34.6475 14.7434 33.7717 15.1813 32.8685 15.1813C31.3085 15.1813 30.3916 14.1275 30.3916 12.4717V8.24316H32.0611V11.8833C32.0611 13.1696 32.5675 13.6896 33.498 13.6896C34.5517 13.6896 35.0581 13.0738 35.0581 11.7875V8.24316Z"
          fill="black"
          className="svg-elem-10"
        ></path>
        <path
          d="M28.7268 10.9117H25.0046V15.0034H23.2529V5H29.4384V6.61478H25.0046V9.33802H28.7268V10.9117Z"
          fill="black"
          className="svg-elem-11"
        ></path>
        <defs>
          <clipPath id="clip0_1002_143359">
            <rect
              width="15"
              height="20"
              fill="white"
              className="svg-elem-12"
            ></rect>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
