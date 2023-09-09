/**
 * Cypress uses Chai for assertions, which conflicts with Jest.
 * VSCode is using the types from Cypress, which is why it's complaining.
 * This is a workaround to get VSCode to stop complaining.
 */
import { describe, it, expect } from "@jest/globals";

import classNames from "../classNames";

describe("classNames", () => {
  it("should return a string of classes", () => {
    expect(classNames("foo", "bar", "baz")).toBe("foo bar baz");
  });
});
