export enum QUESTION_TYPE {
  TextQuestion = "TextQuestion"
}

export interface Question {
  id: number;
  question_type: QUESTION_TYPE;
  prompt: string;
  is_required: boolean;
  min_char_length?: number;
  answer?: any;
}

export enum FORM_TYPE {
  EDITABLE = "EDITABLE",
  SUBMITTED = "SUBMITTED"
}

export interface MainForm {
  title: string;
  questions: Question[];
}
export interface FormState extends MainForm {
  activeIndex: number;
  formType: FORM_TYPE;
}

export interface NewAnswer {
  id: number;
  answer;
}


export interface FormComponentProps {
  formType: FORM_TYPE;
  title: string;
  question: Question;
  hasNext: boolean;
  isNextEnable:boolean;
  hasPervious: boolean;
  progressState:number;
}
export interface FormComponentActions {
  loadQuestionsList: () => void;
  addQuestionAnswer: (id: number, answer) => void;
  goToNextQuestion(): () => void;
  goToPreviousQuestion(): () => void;
  submitForm(): () => void;
  startNewForm(): () => void;
}
