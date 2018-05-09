import * as React from "react";
import FormFooter from "./footer";
import {
  FormComponentProps,
  FormComponentActions
} from "../../containers/form/types";
import QuestionComponent from "./question/index";
import { addQuestionAnswer } from "../../containers/form/actions";
import "./style.scss";
import FormHeader from "./header/index";
import { Button } from "semantic-ui-react";
import { FORM_TYPE } from "../../containers/form/types";
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
      startNewForm,
      question,
      submitForm,
      title,
      formType,
      progressState
    } = this.props;
    return (
      <div className="form-container">
        <FormHeader title={title} progressState={progressState} />
        {formType == FORM_TYPE.EDITABLE ? (
          <div>
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
        ) : (
          <Button content="Restart Form" onClick={startNewForm} />
        )}
      </div>
    );
  }
}

export default AppForm;
