import { useEffect, useRef } from "react";

const usePrevious = <T>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export { usePrevious, sleep };
export * from "./queryStringController";
export * from "./types";
export * from "./window";
