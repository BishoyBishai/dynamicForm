import { initialFormState, fromReducers } from "./reducer";
import { getLoadQuestions } from "./api";
import { FORM_TYPE, NewAnswer } from "./types";
import {
  LOAD_FORM_QUESTIONS,
  ADD_QUESTION_ANSWER,
  GO_TO_NEXT_QUESTION,
  GO_TO_PERVIOUS_QUESTION,
  SUBMIT_FORM,
  START_NEW_FORM
} from "./constants";
describe("form reducer", () => {
  let initialState;
  beforeEach(() => {
    initialState = initialFormState;
  });
  test("should load questions to app store", () => {
    const questions = getLoadQuestions();
    expect(
      fromReducers(initialState, {
        type: LOAD_FORM_QUESTIONS,
        payload: questions
      })
    ).toMatchObject({ ...initialState, ...questions });
  });
  test("should change answer of question", () => {
    const questions = [
      {
        id: 2447,
        question_type: "TextQuestion",
        prompt: "What is your first answer?",
        is_required: false,
        min_char_length: 15
      }
    ];
    const newAnswer: NewAnswer = { id: 2447, answer: "test" };
    expect(
      fromReducers(
        { ...initialState, questions },
        {
          type: ADD_QUESTION_ANSWER,
          payload: newAnswer
        }
      ).questions[0].answer
    ).toEqual("test");
  });
  test("should don't change answer of question if pass wrong id", () => {
    const questions = [
      {
        id: 2447,
        question_type: "TextQuestion",
        prompt: "What is your first answer?",
        is_required: false,
        min_char_length: 15
      }
    ];
    const newAnswer: NewAnswer = { id: 2448, answer: "test" };
    expect(
      fromReducers(
        { ...initialState, questions },
        {
          type: ADD_QUESTION_ANSWER,
          payload: newAnswer
        }
      ).questions[0].answer
    ).toBeUndefined();
  });
  test("should go to next question", () => {
    expect(
      fromReducers(initialState, {
        type: GO_TO_NEXT_QUESTION
      }).activeIndex
    ).toEqual(1);
  });
  test("should go to pervious question", () => {
    expect(
      fromReducers(initialState, {
        type: GO_TO_PERVIOUS_QUESTION
      }).activeIndex
    ).toEqual(-1);
  });
  test("should mark form as submitted form", () => {
    expect(
      fromReducers(initialState, {
        type: SUBMIT_FORM
      })
    ).toMatchObject({
      ...initialState,
      formType: FORM_TYPE.SUBMITTED,
      activeIndex: -1
    });
  });
  test("should mark form as editable form", () => {
    expect(
      fromReducers(initialState, {
        type: START_NEW_FORM
      })
    ).toMatchObject({
      ...initialState,
      activeIndex: 0,
      formType: FORM_TYPE.EDITABLE
    });
  });
});
