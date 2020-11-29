import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { UntypedFunction } from 'types';
import RemoveLinkButton from './components/RemoveLinkButton';
import InputLookalike from './components/InputLookalike';

const ANIMATION_TIME_MS = 200;
const ITEM_HEIGHT = 2.75;
const MOBILE_ITEM_SPACING = 0.5;
const FIRST_ITEM_TOP_SPACING = 0.5;

const TransitionWrapper = styled.div`
  .linklist-enter {
    opacity: 0.01;
    margin-top: -${ITEM_HEIGHT * 3 + MOBILE_ITEM_SPACING * 2}rem;
    @media (min-width: 480px) {
      margin-top: -${ITEM_HEIGHT}rem;
    }
  }
  .linklist-enter-active {
    transition: opacity ${ANIMATION_TIME_MS}ms ${ANIMATION_TIME_MS}ms
        cubic-bezier(0.25, 0.55, 0.3, 1),
      margin-top ${ANIMATION_TIME_MS}ms cubic-bezier(0.25, 0.55, 0.3, 1);
    opacity: 1;

    margin-top: 1.5rem;
    @media (min-width: 480px) {
      margin-top: 1rem;
    }
  }

  .linklist-exit {
    opacity: 1;
    margin-top: 1.5rem;
    @media (min-width: 480px) {
      margin-top: 1rem;
    }
  }

  .linklist-exit-active {
    transition: opacity ${ANIMATION_TIME_MS}ms cubic-bezier(0.25, 0.55, 0.3, 1),
      margin-top ${ANIMATION_TIME_MS}ms ${ANIMATION_TIME_MS}ms cubic-bezier(0.25, 0.55, 0.3, 1);
    opacity: 0;
    margin-top: -${ITEM_HEIGHT * 3 + MOBILE_ITEM_SPACING * 2}rem;
    @media (min-width: 480px) {
      margin-top: -${ITEM_HEIGHT}rem;
      &:first-child {
        margin-top: -${ITEM_HEIGHT - FIRST_ITEM_TOP_SPACING}rem;
      }
    }
  }
`;

const FlexContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (min-width: 480px) {
    flex-wrap: nowrap;
    flex-direction: row;
  }
`;

type Link = {
  id: string;
  attributes: {
    text: string;
    url: string;
  };
  onError: UntypedFunction;
};

export type LinksListProps = {
  links: Link[];
};

const LinksList: React.FC<LinksListProps> = ({ links }) => (
  <TransitionWrapper>
    <TransitionGroup>
      {links.map(({ id, onError, attributes: { text, url } }) => (
        <CSSTransition key={id} timeout={ANIMATION_TIME_MS * 2} classNames="linklist">
          <FlexContainer key={id}>
            <InputLookalike linkOrName={url} isLink />
            <InputLookalike linkOrName={text} />
            <RemoveLinkButton onClick={onError} />
          </FlexContainer>
        </CSSTransition>
      ))}
    </TransitionGroup>
  </TransitionWrapper>
);

export default LinksList;
