import { isNextEnable } from "./helper";
import { QUESTION_TYPE } from "./types";
describe("isNextEnable function", () => {
  test("should function return true when isRequired is false", () => {
    expect(isNextEnable(false, QUESTION_TYPE.TextQuestion, "")).toBeTruthy();
  });
  test("should function return false when isRequired is true and question has no answer", () => {
    expect(isNextEnable(true, QUESTION_TYPE.TextQuestion, "")).toBeFalsy();
  });
  test("should function return false when isRequired is true and question has answer length less than limit", () => {
    expect(
      isNextEnable(true, QUESTION_TYPE.TextQuestion, "test", 5)
    ).toBeFalsy();
  });
  test("should function return true when isRequired is true and question has answer length equal limit", () => {
    expect(
      isNextEnable(true, QUESTION_TYPE.TextQuestion, "test", 4)
    ).toBeTruthy();
  });
  test("should function return true when isRequired is true and question has answer length more than limit", () => {
    expect(
      isNextEnable(true, QUESTION_TYPE.TextQuestion, "test", 3)
    ).toBeTruthy();
  });
});
