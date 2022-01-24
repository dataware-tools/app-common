const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export { sleep };
export * from "./queryStringController";
export * from "./types";
export * from "./window";
export * from "./hooks";
