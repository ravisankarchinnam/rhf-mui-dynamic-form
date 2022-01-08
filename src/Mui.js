import * as React from "react";
import { Controller } from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";
import {
  TextField,
  Checkbox,
  Select,
  MenuItem,
  Switch,
  RadioGroup,
  FormControlLabel,
  ThemeProvider,
  Radio,
  createMuiTheme,
  Slider
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

export default ({ control }) => (
  <ThemeProvider theme={theme}>
    <div className="container">
      <section>
        <label>MUI Checkbox</label>
        <Controller
          name="Checkbox"
          control={control}
          render={(props) => (
            <Checkbox
              onChange={(e) => props.onChange(e.target.checked)}
              checked={props.value}
            />
          )}
        />
      </section>

      <section>
        <label>MUI TextField</label>
        <Controller
          render={(field) => <TextField {...field} />}
          name="TextField"
          control={control}
          rules={{
            required: "This is required.",
            maxLength: {
              value: 5,
              message: "Max length should be less than 5"
            }
          }}
        />
      </section>

      <section>
        <label>MUI Switch</label>
        <Controller
          name="switch"
          control={control}
          render={(props) => (
            <Switch
              onChange={(e) => props.onChange(e.target.checked)}
              checked={props.value}
            />
          )}
        />
      </section>

      <section>
        <label>MUI Slider</label>
        <Controller
          name="MUI_Slider"
          control={control}
          defaultValue={[0, 10]}
          render={(props) => (
            <Slider
              {...props}
              onChange={(_, value) => {
                props.onChange(value);
              }}
              valueLabelDisplay="auto"
              max={10}
              step={1}
            />
          )}
        />
      </section>
    </div>
  </ThemeProvider>
);
