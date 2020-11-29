import React from 'react';
import { Buttons } from 'ui';
import styled from 'styled-components';
import { UntypedFunction } from 'types';
import { theme } from 'ui/utils/selectors';

const Delete = Buttons.Delete as any;

const mediaSmall = theme('MEDIA_SMALL', 'tokens');

const ButtonContainer = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  > button {
    width: 100%;
    @media (min-width: ${mediaSmall}px) {
      width: 2.75rem;
    }
  }
`;

type RemoveLinkButtonProps = {
  onClick: UntypedFunction;
};

const RemoveLinkButton: React.FC<RemoveLinkButtonProps> = ({ onClick }) => (
  <ButtonContainer>
    <Delete onClick={onClick} variant="default" />
  </ButtonContainer>
);

export default RemoveLinkButton;
