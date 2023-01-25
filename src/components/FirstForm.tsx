import { useForm, Controller } from "react-hook-form";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import Slider from "@mui/material/Slider";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

// create interface for from props
interface FormData {
  firstName: string;
  lastName: string;
  age: number;
  birthDate: Date;
  phoneNumber: string;
  email: string;
}

// define form component
const FirstForm = () => {
  //destructure methods from useForm hook
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors }, // allows us to set logic based returns for form sections
  } = useForm<FormData>();

  //create function to handle from submission
  const handleFormSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <Box
      sx={{
        marginTop: "5em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Stack spacing={2}>
          {/* First name */}
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                required
                label="First Name"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: "First name is requried" }}
          />

          {/* Last name */}
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                required
                label="Last name"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: "Last names is requried" }}
          />

          {/* Age Group*/}
          {/* TODO figure out a way to get value from slider comp */}
          <Controller
            name="age"
            control={control}
            render={({ fieldState: { error } }) => (
              <>
                <InputLabel id="ageSelect-label">{"Age"}</InputLabel>
                <Slider
                  size="medium"
                  min={0}
                  max={100}
                  aria-label="age picker"
                  valueLabelDisplay="auto"
                />
              </>
            )}
            rules={{ required: "You need to pick an age" }}
          />

          {/* Date Of birth */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Controller
              name={"birthDate"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  label="Date Of Birth"
                  value={value}
                  onChange={onChange}
                  renderInput={(
                    params: JSX.IntrinsicAttributes & TextFieldProps
                  ) => <TextField {...params} />}
                />
              )}
            />
          </LocalizationProvider>

          {/* Phone Number */}
          {/* TODO: restrict phone number to input to numbers and (xxx)xxx-xxxx format */}
          <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                required
                label="Phone Number"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: "Phone number is requried" }}
          />

          {/* Email Address */}
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                required
                label="Email"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: "Email is requried" }}
          />

          {/* Submit Button */}
          {/* TODO: Kink button to form submit */}
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default FirstForm;
