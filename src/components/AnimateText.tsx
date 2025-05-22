import { useEffect, useState } from "react";

export const AnimatedText = ({ text }: { text: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <span className="inline-flex">
      {text.split("").map((char, index) => (
        <span
          key={`${char}-${index}`}
          className={`
            inline-block
            transition-all
            duration-500
            ${isVisible ? "opacity-100 blur-0" : "opacity-0 blur-md"}
          `}
          style={{
            transitionDelay: `${index * 50}ms`,
            transform: isVisible ? "translateY(0)" : "translateY(10px)",
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};
