import React from 'react';
import './App.css';
import LinksCard from './components/LinksCard';
import styled from 'styled-components';

const PageWrapper = styled.div`
  padding: 4rem 7rem;
`;

function App() {
  return (
    <PageWrapper>
      <LinksCard />
    </PageWrapper>
  );
}

export default App;
