import { useState, useEffect } from 'react';

export const useVisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    // Get current count from localStorage
    const currentCount = localStorage.getItem('portfolio-visitor-count');
    const hasVisitedToday = localStorage.getItem('portfolio-visited-today');
    const today = new Date().toDateString();

    if (!hasVisitedToday || hasVisitedToday !== today) {
      // New visitor or first visit today
      const newCount = currentCount ? parseInt(currentCount) + 1 : 1;
      localStorage.setItem('portfolio-visitor-count', newCount.toString());
      localStorage.setItem('portfolio-visited-today', today);
      setVisitorCount(newCount);
    } else {
      // Returning visitor today
      setVisitorCount(currentCount ? parseInt(currentCount) : 1);
    }
  }, []);

  return visitorCount;
};