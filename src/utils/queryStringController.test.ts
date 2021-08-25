import {
  addQueryString,
  objToQueryString,
  getQueryString,
  deleteQueryString,
  resetQueryString,
} from "./queryStringController";

beforeEach(() => {
  history.pushState(null, "", "?sample=test&test=experiment&experiment=sample");
});

describe("getQueryString", () => {
  test("can get query string", () => {
    expect(getQueryString("sample") === "test").toBeTruthy();
  });
});

describe("deleteQueryString", () => {
  test("can delete one query string", () => {
    deleteQueryString("sample", "push");

    const queryString = new URLSearchParams(window.location.search);
    const sampleValue = queryString.get("sample");
    const testValue = queryString.get("test");
    const experimentValue = queryString.get("experiment");

    expect(sampleValue === null).toBeTruthy();
    expect(testValue === "experiment").toBeTruthy();
    expect(experimentValue === "sample").toBeTruthy();
  });

  test("can delete multi query string", () => {
    deleteQueryString(["sample", "test"], "replace");

    const queryString = new URLSearchParams(window.location.search);
    const sampleValue = queryString.get("sample");
    const testValue = queryString.get("test");
    const experimentValue = queryString.get("experiment");

    expect(sampleValue === null).toBeTruthy();
    expect(testValue === null).toBeTruthy();
    expect(experimentValue === "sample").toBeTruthy();
  });
});

describe("resetQueryString", () => {
  test("can reset query string", () => {
    resetQueryString("push");

    const queryString = new URLSearchParams(window.location.search);
    const sampleValue = queryString.get("sample");
    const testValue = queryString.get("test");
    const experimentValue = queryString.get("experiment");

    expect(sampleValue === null).toBeTruthy();
    expect(testValue === null).toBeTruthy();
    expect(experimentValue === null).toBeTruthy();
  });
});

describe("objToQueryString", () => {
  test("can convert object to query string", () => {
    const obj = {
      sample: "test",
      test: 123,
      experiment: undefined,
      hoge: null,
      array: ["test", 1234],
    };
    const queryString = objToQueryString(obj);
    expect(
      queryString === '?sample=test&test=123&array=["test",1234]'
    ).toBeTruthy();
  });
});

describe("addQueryString", () => {
  test("can add query string", () => {
    addQueryString("?foo=bar&sample=sample", "push");

    const queryString = new URLSearchParams(window.location.search);
    const sampleValue = queryString.get("sample");
    const testValue = queryString.get("test");
    const experimentValue = queryString.get("experiment");
    const fooValue = queryString.get("foo");

    expect(sampleValue === "sample").toBeTruthy();
    expect(testValue === "experiment").toBeTruthy();
    expect(experimentValue === "sample").toBeTruthy();
    expect(fooValue === "bar").toBeTruthy();
  });

  test("can add query string from object", () => {
    const obj = {
      sample: "sample",
      test: 123,
      experiment: undefined,
      hoge: null,
    };
    addQueryString(obj, "replace");

    const queryString = new URLSearchParams(window.location.search);
    const sampleValue = queryString.get("sample");
    const testValue = queryString.get("test");
    const experimentValue = queryString.get("experiment");
    const hogeValue = queryString.get("hoge");

    expect(sampleValue === "sample").toBeTruthy();
    expect(testValue === "123").toBeTruthy();
    expect(experimentValue === "sample").toBeTruthy();
    expect(hogeValue === null).toBeTruthy();
  });
});
