import { Controller, useForm } from "react-hook-form";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import Slider from "@mui/material/Slider";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import DataDisplay from "./DataDisplay";
import { useState } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { CardActions } from "@mui/material";

// create interface for from props
export interface FormData {
  firstName: string;
  lastName: string;
  age: number;
  birthDate: Date;
  phoneNumber: string;
  email: string;
}

// define form component
const FirstForm = () => {
  const [clientData, setClientData] = useState<FormData>();
  const [showData, setShowData] = useState(false);
  //destructure methods from useForm hook
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>();

  //function logs form data to console
  const handleFormSubmit = (data: FormData) => {
    console.log(data);
    reset();
    setClientData(data);
    setShowData(true);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#588157",
      }}
    >
      {!showData && (
        <Card
          sx={{
            backgroundColor: "#DAD7CD",
          }}
        >
          <CardContent>
            <Typography variant="h6" mb={2}>
              Personal Information
            </Typography>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <Stack spacing={2}>
                {/* First name */}
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
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
                  rules={{ required: "First name is required" }}
                />

                {/* Last name */}
                <Controller
                  name="lastName"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
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
                  rules={{ required: "Last names is required" }}
                />

                {/* Age Group*/}
                {/* TODO figure out a way to get value from slider comp */}
                <Controller
                  name="age"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <InputLabel id="ageSelect-label">{"Age"}</InputLabel>
                      <Slider
                        size="small"
                        min={0}
                        max={100}
                        onChange={onChange}
                        aria-label="age picker"
                        valueLabelDisplay="auto"
                      />
                    </>
                  )}
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
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
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
                  rules={{ required: "Phone number is required" }}
                />

                {/* Email Address */}
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
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
                  rules={{ required: "Email is required" }}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon />}
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </CardContent>
        </Card>
      )}
      {showData && (
        <Card
          sx={{
            margin: "1em",
            backgroundColor: "#DAD7CD",
          }}
        >
          <CardContent>
            <Typography variant="h6" mb={2}>
              Thank You For Your Submission!
            </Typography>
            <DataDisplay data={clientData} />
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setShowData(false)}
              endIcon={<RestartAltIcon />}
            >
              Reset
            </Button>
          </CardActions>
        </Card>
      )}
    </Box>
  );
};

export default FirstForm;
