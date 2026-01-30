import { useState, useCallback } from 'react';

interface UseCarouselProps {
  itemsLength: number;
  transitionDuration?: number;
}

export function useCarousel({ itemsLength, transitionDuration = 200 }: UseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransition = useCallback((newIndex: number) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex(newIndex);

    setTimeout(() => {
      setIsTransitioning(false);
    }, transitionDuration);
  }, [isTransitioning, transitionDuration]);

  const next = useCallback(() => {
    const newIndex = (currentIndex + 1) % itemsLength;
    handleTransition(newIndex);
  }, [currentIndex, itemsLength, handleTransition]);

  const prev = useCallback(() => {
    const newIndex = (currentIndex - 1 + itemsLength) % itemsLength;
    handleTransition(newIndex);
  }, [currentIndex, itemsLength, handleTransition]);

  const goTo = useCallback((index: number) => {
    if (index >= 0 && index < itemsLength) {
      handleTransition(index);
    }
  }, [itemsLength, handleTransition]);

  return {
    currentIndex,
    isTransitioning,
    next,
    prev,
    goTo,
  };
}
