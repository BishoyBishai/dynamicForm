import * as React from "react";
import { FormHeaderProps } from "./types";
import { Progress, Header } from "semantic-ui-react";
const FormHeader = ({ title, progressState }: FormHeaderProps) => (
  <div>
    <Header as="h2" content={title} />
    <Progress percent={progressState} size="tiny" active />
  </div>
);

export default FormHeader;