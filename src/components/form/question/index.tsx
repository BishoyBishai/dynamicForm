import * as React from "react";
import { QuestionComponentProps } from "./types";
import { QUESTION_TYPE } from "../../../containers/form/types";
import { Form, TextArea } from "semantic-ui-react";
const QuestionComponent = ({
  prompt,
  id,
  answer,
  question_type,
  optional,
  addQuestionAnswer
}: QuestionComponentProps) => {
  switch (question_type) {
    case QUESTION_TYPE.TextQuestion: {
      return (
        <Form>
          <Form.Field error={answer != null && !optional}>
            <label>{prompt}</label>
            <TextArea
              autoHeight
              value={answer || ""}
              onChange={(e, { value }) => addQuestionAnswer(id, value)}
              placeholder={prompt}
              style={{ minHeight: 100 }}
            />
          </Form.Field>
        </Form>
      );
    }
  }
};
export default QuestionComponent;
