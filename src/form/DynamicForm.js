import { FormProvider } from "react-hook-form";
import DynamicFormElements from "./DynamicFormElements";

export function DynamicFormProvider(props) {
  const { methods, children, onSubmit, ...rest } = props;
  const handleSubmit = (data) => {
    if (onSubmit) onSubmit(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)} noValidate {...rest}>
        {children}
      </form>
    </FormProvider>
  );
}

export const DynamicForm = ({ fields, ...rest }) => {
  return (
    <DynamicFormProvider {...rest}>
      <div style={{ margin: "20px 0" }}>
        <label>* Mandatory</label>
      </div>
      <DynamicFormElements fields={fields} />
    </DynamicFormProvider>
  );
};
