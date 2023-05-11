import { useState, useEffect } from "react";

const useMedia = (mediaQueryString) => {
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString);
    const listener = () => setMatches(!!mediaQueryList.matches);
    listener();
    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [mediaQueryString]);

  if (matches === null) return;
  console.log(matches);
  return matches;
};

export default useMedia;
