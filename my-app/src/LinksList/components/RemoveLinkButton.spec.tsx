import React from 'react';
import RemoveLinkButton from './RemoveLinkButton';
import { render } from 'testUtils';

describe('<RemoveLinkButton /> spec', () => {
  it('renders button', () => {
    const { container } = render(<RemoveLinkButton onClick={() => null} />);
    expect((container?.firstChild as Element)?.querySelector('button')).not.toBeNull();
  });
});
