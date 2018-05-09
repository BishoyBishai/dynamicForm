import * as React from "react";
import FormFooter from "./footer";
import {
  FormComponentProps,
  FormComponentActions
} from "../../containers/form/types";
import { Input } from "semantic-ui-react";
import QuestionComponent from "./question/index";
import { addQuestionAnswer } from "../../containers/form/actions";
import "./style.scss";
class AppForm extends React.Component<
  FormComponentProps & FormComponentActions
> {
  componentDidMount() {
    this.props.loadQuestionsList();
  }
  render() {
    const {
      hasNext,
      hasPervious,
      isNextEnable,
      goToNextQuestion,
      goToPreviousQuestion,
      addQuestionAnswer,
      question,
      submitForm,
      title
    } = this.props;
    return (
      <div className="form-container">
        <p>{title}</p>
        {question && (
          <QuestionComponent
            {...question}
            optional={isNextEnable}
            addQuestionAnswer={addQuestionAnswer}
          />
        )}
        <FormFooter
          hasNext={hasNext}
          hasPrevious={hasPervious}
          isNextEnable={isNextEnable}
          goToNextQuestion={goToNextQuestion}
          submitForm={submitForm}
          goToPreviousQuestion={goToPreviousQuestion}
        />
      </div>
    );
  }
}

export default AppForm;
