import React, { useState } from "react";
import Input from "./FormInput";
import Select from "./FormSelect";
import Button from "./FormButton";

const Form: React.FC = () => {
  const [inputs, setInputs] = useState<
    { type: string; placeholder?: string; value: string }[]
  >([]);

  const handleAddInput = () => {
    setInputs((prevInputs) => [
      ...prevInputs,
      { type: "text", placeholder: "New Input", value: "" },
    ]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Values:", inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input, index) => (
        <Input
          key={index}
          {...input}
          onChange={(e) => {
            const newInputs = [...inputs];
            newInputs[index] = { ...newInputs[index], value: e.target.value };
            setInputs(newInputs);
          }}
        />
      ))}
      <Select
        options={[
          { label: "Text", value: "text" },
          { label: "Number", value: "number" },
          { label: "Date", value: "date" },
        ]}
        onChange={(e) => {
          const { value } = e.target;
          setInputs((prevInputs) =>
            prevInputs.map((input, idx) =>
              idx === inputs.length - 1 ? { ...input, type: value } : input
            )
          );
        }}
      />
      <Button type="button" onClick={handleAddInput}>
        Add Input
      </Button>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
