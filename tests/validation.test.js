import { test, expect } from "vitest";
import { validateEmail } from "./validation.js";

test("email valid", () => {
    expect(validateEmail("Sincere@april.biz"))
        .toBe(true);
});

test("email tidak valid", () => {
    expect(validateEmail("abcgmail.com"))
        .toBe(false);
});