import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  flex: auto;
  margin: 0 0 1.5rem 0;
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;

  @media (min-width: 480px) {
    max-width: calc(50% - 1.375rem - 1rem);
  }
  @media (min-width: 480px) {
    margin: 0 1rem 0 0;
  }
`;

const InputLookalikeStyling = styled.div`
font-size: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  appearance: none;
  max-width: 100%;
  position: relative;
  word-break: keep-all;
  white-space: nowrap;
  width: 100%;
  padding: 3rem 1.5rem;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 6px;
  box-sizing: border-box;
  height: 4.4rem;
  background: #fff;
  display: flex;
  align-items: center;
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
