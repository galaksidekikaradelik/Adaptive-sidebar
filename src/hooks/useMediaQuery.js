import { useState, useEffect } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const media = window.matchMedia(query);

    let timer;
    const handleChange = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setMatches(media.matches);  
      }, 100);
    };

    media.addEventListener("change", handleChange);
    return () => {
      clearTimeout(timer);
      media.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;  
}