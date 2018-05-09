import { NewAnswer } from "./types";
import { getLoadQuestions } from "./api";
import {
  LOAD_FORM_QUESTIONS,
  ADD_QUESTION_ANSWER,
  GO_TO_NEXT_QUESTION,
  GO_TO_PERVIOUS_QUESTION,
  SUBMIT_FORM,
  START_NEW_FORM
} from "./constants";

export function loadQuestionsList() {
  return function(dispatch) {
    dispatch({ type: LOAD_FORM_QUESTIONS, payload: getLoadQuestions() });
  };
}
export function addQuestionAnswer(id: number, answer) {
  return function(dispatch) {
    const newAnswer: NewAnswer = { id, answer };
    dispatch({ type: ADD_QUESTION_ANSWER, payload: newAnswer });
  };
}
export function goToNextQuestion() {
  return function(dispatch) {
    dispatch({ type: GO_TO_NEXT_QUESTION });
  };
}
export function goToPreviousQuestion() {
  return function(dispatch) {
    dispatch({ type: GO_TO_PERVIOUS_QUESTION });
  };
}
export function submitForm() {
  return function(dispatch) {
    dispatch({ type: SUBMIT_FORM });
  };
}
export function startNewForm() {
  return function(dispatch) {
    dispatch({ type: START_NEW_FORM });
  };
}
