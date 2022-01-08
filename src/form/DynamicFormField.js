import React from "react";
import FormTextField from "./fields/FormTextField";

const DynamicFormField = ({ inputType, ...rest }) => {
  return <FormTextField {...rest} />;
};

export default DynamicFormField;
