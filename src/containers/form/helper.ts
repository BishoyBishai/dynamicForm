import { QUESTION_TYPE } from "./types";
export function isNextEnable(
  isRequired: boolean,
  questionType: QUESTION_TYPE,
  answer,
  minCharLength?: number
) {
  if (isRequired) {
    switch (questionType) {
      case QUESTION_TYPE.TextQuestion: {
        return answer && (answer as string).trim().length >= minCharLength;
      }
    }
  }
  return true;
}
