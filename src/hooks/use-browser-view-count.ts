import { useEffect, useState } from "react";

const countKey = "vipul-portfolio-browser-view-count";
const sessionKey = "vipul-portfolio-session-counted";

export function useBrowserViewCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCount = Number.parseInt(window.localStorage.getItem(countKey) ?? "0", 10);
    const alreadyCounted = window.sessionStorage.getItem(sessionKey) === "true";

    if (alreadyCounted) {
      setCount(Number.isNaN(storedCount) ? 0 : storedCount);
      return;
    }

    const nextCount = (Number.isNaN(storedCount) ? 0 : storedCount) + 1;
    window.localStorage.setItem(countKey, String(nextCount));
    window.sessionStorage.setItem(sessionKey, "true");
    setCount(nextCount);
  }, []);

  return count;
}
