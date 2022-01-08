import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@material-ui/core";

const FormTextField = ({ name, ...rest }) => {
  const {
    control,
    formState: { errors }
  } = useFormContext();

  const errorMessage = errors[name]?.message;

  return (
    <Controller
      render={({ field }) => (
        <TextField
          {...rest}
          {...field}
          fullWidth
          helperText={errorMessage}
          error={Boolean(errorMessage)}
          variant="outlined"
          onChange={(e) =>
            field?.onChange(
              (e?.target?.value ?? "")?.replace(/\s{2,}/g, " ")?.trimStart()
            )
          }
          onKeyDown={(e) => {
            if (e.keyCode === 13 && field.onChange) {
              field.onChange(field?.value?.trim());
            }
          }}
        />
      )}
      name={name}
      control={control}
      rules={{
        required: "This is required.",
        maxLength: {
          value: 5,
          message: "Max length should be less than 5"
        }
      }}
    />
  );
};

export default FormTextField;
