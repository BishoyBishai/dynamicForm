import { NewAnswer, FormState, FORM_TYPE, Question, MainForm } from "./types";
import { AnyAction } from "redux";
import {
  LOAD_FORM_QUESTIONS,
  ADD_QUESTION_ANSWER,
  GO_TO_NEXT_QUESTION,
  GO_TO_PERVIOUS_QUESTION,
  SUBMIT_FORM,
  START_NEW_FORM
} from "./constants";
export const initialFormState: FormState = {
  title: "",
  activeIndex: 0,
  formType: FORM_TYPE.SUBMITTED,
  questions: []
};
export function fromReducers(
  state = initialFormState,
  action: AnyAction
): FormState {
  switch (action.type) {
    case LOAD_FORM_QUESTIONS: {
      const form: MainForm = action.payload;
      return {
        ...state,
        ...form
      };
    }
    case ADD_QUESTION_ANSWER: {
      const newAnswer: NewAnswer = action.payload;
      return {
        ...state,
        questions: state.questions.map(
          question =>
            question.id === newAnswer.id
              ? { ...question, answer: newAnswer.answer }
              : question
        )
      };
    }
    case GO_TO_NEXT_QUESTION:
      return {
        ...state,
        activeIndex: state.activeIndex + 1
      };
    case GO_TO_PERVIOUS_QUESTION:
      return {
        ...state,
        activeIndex: state.activeIndex - 1
      };
    case SUBMIT_FORM:
      return {
        ...state,
        formType: FORM_TYPE.SUBMITTED
      };
    case START_NEW_FORM:
      return {
        ...state,
        formType: FORM_TYPE.EDITABLE,
        activeIndex: 0,
        questions: state.questions.map(question => ({
          ...question,
          answer: null
        }))
      };
  }
  return state;
}
