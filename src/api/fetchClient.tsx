type Data<T> = T extends void | undefined | null
  ? "__fetchSuccess__" | undefined
  : T | undefined;

const fetchAPI = async <T, U>(
  fetcher: (args: T) => Promise<U>,
  param: T
): Promise<[data: Data<U>, error: any]> => {
  try {
    const res = await fetcher(param);
    // See: https://miyauchi.dev/ja/posts/typescript-conditional-types#%E5%9E%8B%E5%AE%9A%E7%BE%A9%E3%81%A8-conditional-types
    return [(res || "__fetchSuccess__") as Data<U>, undefined];
  } catch (error) {
    return [undefined as Data<U>, error];
  }
};

type FetchErrorType = {
  body?: { detail?: unknown; instruction?: unknown };
  status: number;
};

const extractReasonFromFetchError = (fetchError: FetchErrorType): string => {
  if (typeof fetchError.body?.detail === "string") {
    return fetchError.body?.detail;
  } else if (fetchError.body?.detail) {
    return JSON.stringify(fetchError.body.detail);
  } else {
    return JSON.stringify(fetchError);
  }
};

const extractInstructionFromFetchError = (
  fetchError: FetchErrorType
): string | undefined => {
  if (typeof fetchError.body?.instruction === "string") {
    return fetchError.body?.instruction;
  } else if (fetchError.body?.instruction) {
    return JSON.stringify(fetchError.body.instruction);
  } else if (fetchError.status >= 500 && fetchError.status < 600) {
    return "Something went wrong in the server. Please contact the administrator";
  }
  return undefined;
};

const extractErrorMessageFromFetchError = (
  fetchError: FetchErrorType
): { reason: string; instruction: string | undefined } => {
  const reason = extractReasonFromFetchError(fetchError);
  const instruction = extractInstructionFromFetchError(fetchError);
  return { reason, instruction };
};

export {
  fetchAPI,
  extractReasonFromFetchError,
  extractErrorMessageFromFetchError,
};
