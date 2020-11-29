import React from 'react';
import styled from 'styled-components';
import { Button } from "../../../ui/Button";
import { ReactComponent as DeleteIcon } from '../../../svg/delete.svg';

const ButtonContainer = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  > button {
    width: 100%;
    @media (min-width: 480px) {
      max-width: 10rem;
    }
  }
`;

type RemoveLinkButtonProps = {
  onClick: () => void;
};

const RemoveLinkButton: React.FC<RemoveLinkButtonProps> = ({ onClick }) => (
  <ButtonContainer>
    <Button onClick={onClick} title={'Delete'}><DeleteIcon /></Button>
  </ButtonContainer>
);

export default RemoveLinkButton;
