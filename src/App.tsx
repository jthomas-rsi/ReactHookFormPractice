import "./styles.css";
import { useState } from "react";
import FirstForm from "./components/FirstForm";
import FormModal from "./components/DataDisplay";
import { FormData } from "./components/FirstForm";

const App = () => {
  const updateModalState = (update: boolean, data: FormData) => {
    console.log("passed update boolean", update);
    console.log("Data Shown In App", data);
  };

  return (
    <>
      <FirstForm />
    </>
  );
};

export default App;
