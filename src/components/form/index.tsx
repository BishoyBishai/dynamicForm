import * as React from "react";
import FormFooter from "./footer";
import {
  FormComponentProps,
  FormComponentActions
} from "../../containers/form/types";
import { Input } from "semantic-ui-react";

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
      <div>
        <p>{title}</p>
        {question && (
          <Input
            value={question.answer || ""}
            onChange={(e, { value }) => addQuestionAnswer(question.id, value)}
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
