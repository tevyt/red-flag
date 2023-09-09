import classNames from "../classNames";

describe("classNames", () => {
  it("should return a string of classes", () => {
    expect(classNames("foo", "bar", "baz")).toBe("foo bar baz");
  });
});
