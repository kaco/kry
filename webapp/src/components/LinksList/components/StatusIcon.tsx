import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SuccessIcon } from '../../../svg/circle-check.svg';
import { ReactComponent as FailureIcon } from '../../../svg/circle-cross.svg';

const IconContainer = styled.div<{status: string}>`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  margin-top: 3rem;
  
  svg path {
    stroke: ${props => (props.status === 'OK' ? 'green' : 'red')};
  }
  @media (min-width: 480px) {
    max-width: 10rem;
    margin-right: 2rem;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

type RemoveLinkButtonProps = {
  status: string;
};

const StatusIcon: React.FC<RemoveLinkButtonProps> = ({ status }) => (
  <IconContainer status={status}>
    {status === 'OK' ? <SuccessIcon/> : <FailureIcon/>}
  </IconContainer>
);

export default StatusIcon;
