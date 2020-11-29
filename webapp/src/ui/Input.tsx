import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 3rem 1.5rem;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 6px;
  box-sizing: border-box;
  height: 4.4rem;
`;

type InputProps = {
  name: string;
  value: string;
  placeholder: string;
  maxLength: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
};

export const Input: React.FC<InputProps> = ({ name, value, placeholder, maxLength, onChange, errorMessage }) => {
  return (
    <>
      <StyledInput
        name={name}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
      />
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};
