import React from "react";

type InputBoxProps = {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
};

const InputBox = ({
  name,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
}: InputBoxProps) => (
  <input
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    type={type}
    required={required}
    className={`input-box p-element text-body`}
  />
);

export default InputBox;