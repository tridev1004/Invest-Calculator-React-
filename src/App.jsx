import Header from "./components/Header";
import Results from "./components/Results";
import { useState } from "react";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

const inputisValid= userInput.duration>=1;


  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserINput) => {
      return {
        ...prevUserINput,
        [inputIdentifier]: +newValue,
      };
    });
  }


  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputisValid &&  <p>Please enter a Duration greater than 0</p>}
      {inputisValid && <Results input={userInput} />}
    </>
  );
}

export default App;
