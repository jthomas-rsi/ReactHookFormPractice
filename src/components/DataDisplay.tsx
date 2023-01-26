import { useState } from "react";
import { FormData } from "./FirstForm";

interface DisplayProps {
  data?: FormData;
}

const DataDisplay = ({ data }: DisplayProps): JSX.Element => {
  if (data) {
    console.log("inside data display", Object.keys(data));
    const { firstName, lastName, age, birthDate, phoneNumber, email } = data;
    return (
      <div>
        <>{firstName}</>
        <>{lastName}</>
        <>{age}</>
        <>{birthDate.toDateString}</>
        <>{phoneNumber}</>
        <>{email}</>
      </div>
    );
  } else {
    return <></>;
  }
};

export default DataDisplay;
