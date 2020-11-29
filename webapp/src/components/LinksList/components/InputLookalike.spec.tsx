import React from 'react';
import { render } from '@testing-library/react';
import InputLookalike from './InputLookalike';

describe('<AddLinkButton /> spec', () => {
  it('renders with url', () => {
    const linkUrl = 'http://www.internet.se';
    const { container } = render(<InputLookalike linkOrName={linkUrl} isLink />);
    expect((container?.firstChild as Element)?.querySelector('a')?.getAttribute('href')).toBe(
      linkUrl,
    );
  });
  it('renders with text', () => {
    const linkName = 'My link!';
    const { getByText } = render(<InputLookalike linkOrName={linkName} />);
    expect(getByText(linkName)).not.toBeNull();
  });
});
