import { useForm } from "react-hook-form";

function useFormHook(props) {
  const methods = useForm({
    ...props,
    mode: "onBlur",
    reValidateMode: "onChange"
  });
  return { methods };
}

export default useFormHook;
