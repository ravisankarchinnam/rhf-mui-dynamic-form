import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container } from "@material-ui/core";
import Header from "./Header";
import useFormHook from "./form/useFormHook";
import { DynamicForm } from "./form/DynamicForm";
import FormResult from "./form/FormResult";
import "./styles.css";

let renderCount = 0;

const defaultValues = {
  textfield: ""
};

function App() {
  const { methods } = useFormHook({
    defaultValues
  });
  const {
    formState: { isValid, errors, isDirty }
  } = methods;
  console.log({ isValid, errors: JSON.stringify(errors), isDirty });
  const [data, setData] = useState(null);
  renderCount++;
  return (
    <>
      <Header renderCount={renderCount} />
      <hr />
      <Container maxWidth="sm">
        <DynamicForm
          fields={[{ name: "textfield", label: "Field" }]}
          methods={methods}
          onSubmit={(data) => setData(data)}
        />
        <FormResult {...data} />
      </Container>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
