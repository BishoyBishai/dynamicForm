import { Question } from "../../../containers/form/types";
export interface QuestionComponentProps extends Question {
  addQuestionAnswer: (id: number, answer) => void;
  optional:boolean;
}
