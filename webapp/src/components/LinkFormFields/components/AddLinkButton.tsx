import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../ui/Button';
import { ReactComponent as PlusIcon } from '../../../svg/plus.svg';

const ButtonContainer = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  > button {
    max-width: 100%;
    @media (min-width: 480px) {
      max-width: 10rem;
    }
  }
`;

type AddLinkButtonProps = {
  onClick: () => void;
};

export const AddLinkButton: React.FC<AddLinkButtonProps> = ({ onClick }) => {
  return (
    <ButtonContainer>
      <Button onClick={onClick} title={'Add'}><PlusIcon /></Button>
    </ButtonContainer>
  );
};
