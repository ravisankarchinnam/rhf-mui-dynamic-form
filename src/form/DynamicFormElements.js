import { Button, Grid } from "@material-ui/core";
import React from "react";
import { useFormContext } from "react-hook-form";
import DynamicFormField from "./DynamicFormField";

const DynamicFormElements = ({ fields }) => {
  const {
    formState: { isValid, isDirty, isSubmitting, errors }
  } = useFormContext();

  const isSubmitDisabled =
    !isDirty || !isValid || isSubmitting || JSON.stringify(errors) !== "{}";

  return (
    <Grid container direction="column" spacing={3}>
      {fields?.map(({ isDisabled = false, ...field }, idX) => (
        <Grid item key={field?.name}>
          <DynamicFormField {...field} disabled={isDisabled || isSubmitting} />
        </Grid>
      ))}
      <Grid item>
        <Button type="submit" variant="contained" disabled={isSubmitDisabled}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default DynamicFormElements;
