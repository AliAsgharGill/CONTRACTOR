import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const AddButton = styled.button`
  padding: 5px 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

interface SelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
  return (
    <>
      <Label>Material Name</Label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

interface RadioProps {
  id: string;
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const Radio: React.FC<RadioProps> = ({
  id,
  name,
  value,
  label,
  checked,
  onChange,
}) => {
  return (
    <div>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

const NumberInput = styled.input`
  width: 60px;
`;

interface FormFieldProps {
  id: number;
  data: FormData;
  onChange: (id: number, field: string, value: string) => void;
}

interface FormData {
  material: string;
  type: string;
  amount: string;
  number: string;
}

const FormField: React.FC<FormFieldProps> = ({ id, data, onChange }) => {
  return (
    <Row key={id}>
      <div>
        <Select
          options={["Select", "Material 1", "Material 2", "Material 3"]}
          value={data.material}
          onChange={(value) => onChange(id, "material", value)}
        />
      </div>
      <div>
        <Label>Material Type</Label>
        <Radio
          id={`structure${id}`}
          name={`type${id}`}
          value="structure"
          label="Structure"
          checked={data.type === "structure"}
          onChange={(value) => onChange(id, "type", value)}
        />
        <Radio
          id={`nonstructure${id}`}
          name={`type${id}`}
          value="nonstructure"
          label="Non-Structure"
          checked={data.type === "nonstructure"}
          onChange={(value) => onChange(id, "type", value)}
        />
      </div>
      <div>
        <Label>Material Amount</Label>
        <br />
        <Radio
          id={`metrictons${id}`}
          name={`amount${id}`}
          value="metrictons"
          label="Metric Tons"
          checked={data.amount === "metrictons"}
          onChange={(value) => onChange(id, "amount", value)}
        />
        <Radio
          id={`m3${id}`}
          name={`amount${id}`}
          value="m3"
          label="m3"
          checked={data.amount === "m3"}
          onChange={(value) => onChange(id, "amount", value)}
        />
      </div>
      <div>
        <Label>Number</Label>
        <NumberInput
          type="number"
          value={data.number}
          onChange={(e) => onChange(id, "number", e.target.value)}
        />
      </div>
    </Row>
  );
};

const Form: React.FC = () => {
  const [fields, setFields] = useState<FormData[]>([
    { material: "Select", type: "", amount: "", number: "" },
  ]);

  const addField = () => {
    setFields([
      ...fields,
      { material: "Select", type: "", amount: "", number: "" },
    ]);
  };

  const handleChange = (id: number, field: string, value: string) => {
    const newFields = fields.map((fieldData, index) =>
      index === id ? { ...fieldData, [field]: value } : fieldData
    );
    setFields(newFields);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(fields);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <FormField
            key={index}
            id={index}
            data={field}
            onChange={handleChange}
          />
        ))}
        <AddButton type="button" onClick={addField}>
          Add
        </AddButton>
        <button type="submit">Submit</button>
        <input type="file" />
      </form>
    </FormContainer>
  );
};

export default Form;
