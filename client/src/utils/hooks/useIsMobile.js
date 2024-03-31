import { useState, useEffect } from "react";

const useIsMobile = () => {
  if (typeof window !== "undefined") {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };
    useEffect(() => {
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }, []);

    const isMobile = width <= 768;

    return isMobile;
  }
};

export default useIsMobile;
