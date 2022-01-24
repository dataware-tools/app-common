import { useCallback, useEffect, useRef } from "react";

export const usePrevious = <T>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export const useWindowEventListener = (
  type: keyof WindowEventMap,
  listener: EventListener,
  options?: boolean | AddEventListenerOptions | undefined
): {
  addEventListener: () => void;
  removeEventListener: () => void;
} => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const eventListener = useCallback(listener, []);

  return {
    addEventListener: () => {
      window.addEventListener(type, eventListener, options);
    },
    removeEventListener: () => {
      window.removeEventListener(type, eventListener, options);
    },
  };
};

export const useConfirmClosingWindow = (
  checkShouldConfirmClosing: () => Promise<boolean> | boolean
): ReturnType<typeof useWindowEventListener> => {
  return useWindowEventListener("beforeunload", (e: BeforeUnloadEvent) => {
    if (checkShouldConfirmClosing()) {
      e.preventDefault();
      e.returnValue = "";
    }
  });
};
