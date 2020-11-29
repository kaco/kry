import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AddLinkButton } from './AddLinkButton';

describe('<AddLinkButton /> spec', () => {
  it('renders the button', () => {
    const addLinkCallback = jest.fn();
    const { container } = render(<AddLinkButton onClick={addLinkCallback} />);
    expect((container?.firstChild as Element)?.querySelector('button'));
  });
  it('triggers the callback on click', () => {
    const addLinkCallback = jest.fn();
    const { container } = render(<AddLinkButton onClick={addLinkCallback} />);
    fireEvent.click(
      (container?.firstChild as Element)?.querySelector('button') as HTMLButtonElement,
    );
    expect(addLinkCallback).toHaveBeenCalledTimes(1);
  });
});
