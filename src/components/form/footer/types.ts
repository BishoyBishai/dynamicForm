export interface FormFooterProps {
  hasNext: boolean;
  hasPrevious: boolean;
  isNextEnable:boolean;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  submitForm: () => void;
}
