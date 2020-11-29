import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #0a7e85;
  font-weight: 700;
  text-align: center;
  overflow: hidden;
  vertical-align: middle;
  user-select: none;
  border: 0;
  font-size: 2rem;
  line-height: 1.5;
  padding: 1.6rem 2.6rem;
  border-radius: 6px;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  svg path {
    stroke: #fff;
  }
`;

type ButtonProps = {
  onClick: () => void;
  title: string;
  children?: any;
};

export const Button: React.FC<ButtonProps> = ({ onClick, title, children }) => {
  return (
    <StyledButton onClick={onClick} title={title}>{children}</StyledButton>
  );
};
