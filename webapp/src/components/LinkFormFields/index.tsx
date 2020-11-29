import React from 'react';
import styled from 'styled-components';
import { AddLinkButton } from './components/AddLinkButton';
import { Input } from '../../ui/Input';

const FlexContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (min-width: 480px) {
    margin-bottom: 0;
    flex-wrap: nowrap;
    flex-direction: row;
  }
`;

const InputContainer = styled.div`
  flex: auto;
  margin: 0 0 1.5rem 0;
  width: 100%;
  max-width: 100%;

  @media (min-width: 480px) {
    max-width: calc(50% - 1.375rem - 1rem);
  }
  @media (min-width: 480px) {
    margin: 0 1rem 0 0;
  }
`;

export type LinkFormProps = {
  nameValue: string;
  urlValue: string;
  onFieldChange: (name: string, value: string) => void;
  onEnter: (text: string, url: string) => void;
  errorMessage: string;
};

const LinkForm: React.FC<LinkFormProps> = ({
  nameValue,
  urlValue,
  onFieldChange,
  onEnter,
  errorMessage,
}) => {
  const getTrimmedInput = () => {
    const name = nameValue.replace(/\s+/g, ' ').trim();
    const url = urlValue.trim();
    if (nameValue !== name) onFieldChange('name', name);
    if (urlValue !== url) onFieldChange('url', url);
    return { name, url };
  };

  const extendedOnEnter = async () => {
    const { name, url } = getTrimmedInput();
    onEnter(name, url);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFieldChange(e.target.name, e.target.value);
  };

  return (
    <FlexContainer>
      <InputContainer>
        <Input
          name="url"
          value={urlValue}
          placeholder="URL"
          onChange={onInputChange}
          errorMessage={errorMessage}
        />
      </InputContainer>
      <InputContainer>
        <Input
          name="name"
          value={nameValue}
          placeholder={'name'}
          onChange={onInputChange}
        />
      </InputContainer>
      <AddLinkButton onClick={extendedOnEnter} />
    </FlexContainer>
  );
};

export default LinkForm;
