import { Stack } from "@mui/system";
import { FormData } from "./FirstForm";
import Divider from "@mui/material/Divider";

interface DisplayProps {
  data?: FormData;
}

const DataDisplay = ({ data }: DisplayProps): JSX.Element => {
  if (data) {
    const { firstName, lastName, age, birthDate, phoneNumber, email } = data;
    return (
      <Stack spacing={3}>
        <Divider />
        <div>{`First Name: ${firstName}`}</div>
        <Divider />
        <div>{`Last Name: ${lastName}`}</div>
        <Divider />
        <div>{`Age: ${age}`}</div>
        <Divider />
        <div>{` Birth Date: ${birthDate.toDateString()}`}</div>
        <Divider />
        <div>{`Phone Number: ${phoneNumber}`}</div>
        <Divider />
        <div>{`Email: ${email}`}</div>
        <Divider />
      </Stack>
    );
  } else {
    return <></>;
  }
};

export default DataDisplay;
