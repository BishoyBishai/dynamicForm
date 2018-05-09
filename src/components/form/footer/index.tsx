import * as React from "react";
import { Button } from "semantic-ui-react";
import { FormFooterProps } from "./types";

const FormFooter = ({
  hasNext,
  hasPrevious,
  isNextEnable,
  goToNextQuestion,
  goToPreviousQuestion,
  submitForm
}: FormFooterProps) => (
  <Button.Group fluid>
    {hasPrevious && (
      <Button labelPosition="left" onClick={goToPreviousQuestion} icon="left chevron" content="Back" />
    )}
    {hasNext && (
      <Button labelPosition="right" disabled={!isNextEnable} onClick={goToNextQuestion} icon="right chevron" content="Next" />
    )}
    {!hasNext && (
      <Button labelPosition="right" disabled={!isNextEnable}  onClick={submitForm} icon="right chevron" content="Submit" />
    )}
  </Button.Group>
);

export default FormFooter;
