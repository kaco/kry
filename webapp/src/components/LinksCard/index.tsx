import React from 'react';
import AddedLinks from './components/AddedLinks';
import LinkForm from './components/LinkForm';

const ResourceLinksCard: React.FC = () => {
  return (
    <div>
      <h2>Add your links</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <LinkForm />
      <h2>Your added links</h2>
      <AddedLinks />
    </div>
  );
};

ResourceLinksCard.propTypes = {};

export default ResourceLinksCard;
