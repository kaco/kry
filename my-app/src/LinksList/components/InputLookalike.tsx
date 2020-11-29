import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  flex: auto;
  margin: 0 0 0.5rem 0;
  width: 100%;
  max-width: 100%;

  @media (min-width: 480px) {
    max-width: calc(50% - 1.375rem - 1rem);
  }
  @media (min-width: 480px) {
    margin: 0 1rem 0 0;
  }
`;

const InputLookalikeStyling = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  appearance: none;
  background: #fff;
  padding: 12px 16px;
  width: 100%;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 4px;
  word-break: keep-all;
  white-space: nowrap;
`;

type InputLookalikeProps = {
  linkOrName: string;
  isLink?: boolean;
};

const InputLookalike: React.FC<InputLookalikeProps> = ({ linkOrName, isLink = false }) => (
  <InputContainer>
    <InputLookalikeStyling>
      {isLink ? (
        <a href={linkOrName} target="_blank" rel="noopener noreferrer">
          {linkOrName}
        </a>
      ) : (
        <span>{linkOrName}</span>
      )}
    </InputLookalikeStyling>
  </InputContainer>
);

export default InputLookalike;
