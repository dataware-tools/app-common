import "@testing-library/jest-dom/extend-expect";
import { cache } from "swr";

afterEach(() => {
  cache.clear();
});

beforeEach(() => {
  window.crypto = {
    // @ts-expect-error need for testing component using auth0
    subtle: {},
  };
});
