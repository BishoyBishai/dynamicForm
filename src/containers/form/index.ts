import { connect } from "react-redux";
import AppForm from "../../components/form/index";
import { ReducersProps } from "../../bin/types";
import { FormComponentProps } from "./types";
import { isNextEnable } from "./helper";
import {
  loadQuestionsList,
  goToNextQuestion,
  goToPreviousQuestion,
  submitForm,
  startNewForm,
  addQuestionAnswer
} from "./actions";

const mapStateToProps = (s: ReducersProps): FormComponentProps => {
  const { activeIndex, questions, title, formType } = s.fromReducers;
  return {
    formType,
    title,
    question: questions[activeIndex],
    hasNext: activeIndex < questions.length - 1,
    isNextEnable:
      questions[activeIndex] &&
      isNextEnable(
        questions[activeIndex].is_required,
        questions[activeIndex].question_type,
        questions[activeIndex].answer,
        questions[activeIndex].min_char_length
      ),
    hasPervious: activeIndex > 0,
    progressState:
      (questions.length > 0 && (activeIndex + 1) / questions.length * 100) || 0
  };
};
const mapDispatchToProps = dispatch => ({
  loadQuestionsList: () => dispatch(loadQuestionsList()),
  goToNextQuestion: () => dispatch(goToNextQuestion()),
  goToPreviousQuestion: () => dispatch(goToPreviousQuestion()),
  submitForm: () => dispatch(submitForm()),
  startNewForm: () => dispatch(startNewForm()),
  addQuestionAnswer: (id: number, answer) =>
    dispatch(addQuestionAnswer(id, answer))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppForm);
