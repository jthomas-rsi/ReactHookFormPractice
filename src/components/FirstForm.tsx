import { useForm } from "react-hook-form";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

// create interface for from props
interface FormData {
  firstName: string;
  lastName: string;
  age: number;
  birthDate: Date;
  phoneNumber: number;
  email: string;
}

// define form component
const FirstForm = (): JSX.Element => {
  //destructure methods from useForm hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors } // allows us to set logic based returns for form sections
  } = useForm<FormData>();

  //create function to handle from submission
  const handleFormSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <Box
      sx={{
        height: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Stack spacing={2}>
          {/* First name */}
          <Stack>
            <label htmlFor="firstName">First Name </label>
            <input
              id="firstName"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && "First name is required"}
          </Stack>

          {/* Last name */}
          <Stack>
            <label htmlFor="lastName">Last Name </label>
            <input {...register("lastName", { required: true })} />
            {errors.lastName && "Last name is required"}
          </Stack>

          {/* Age */}
          <Stack>
            <label htmlFor="age">Age </label>
            <input id="age" type="number" {...register("age")} />
          </Stack>

          {/* Date Of birth */}
          <Stack>
            <label htmlFor="birthDate">Date Of Birth </label>
            <input type="date" id="birthDate" {...register("birthDate")} />
            {errors.birthDate && "Date of birth required"}
          </Stack>

          {/* Phone Number */}
          <Stack>
            <label htmlFor="birthDate">Phone Number </label>
            <input
              placeholder={"(555)-867-5309"}
              {...register("phoneNumber", { required: true })}
            />
            {errors.phoneNumber && "Phone number is required"}
          </Stack>

          {/* Email Address */}
          <Stack>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder={"myAddress@provider.com"}
              {...register("email", { required: true })}
            />
            {errors.email && "Email is required"}
          </Stack>

          {/* Submit Button */}
          <input type={"submit"} />
        </Stack>
      </form>
    </Box>
  );
};

export default FirstForm;
