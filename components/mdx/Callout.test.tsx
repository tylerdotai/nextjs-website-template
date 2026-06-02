import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Callout } from '@/components/mdx/Callout';

describe('Callout', () => {
  it('renders children', () => {
    render(<Callout>Hello from a callout</Callout>);
    expect(screen.getByText('Hello from a callout')).toBeInTheDocument();
  });

  it('renders a custom title when provided', () => {
    render(<Callout type="info" title="My title">Body</Callout>);
    expect(screen.getByText('My title')).toBeInTheDocument();
    expect(screen.getByRole('note', { name: 'My title' })).toBeInTheDocument();
  });

  it('uses the type label as accessible name when no title is given', () => {
    render(<Callout type="warning">Body</Callout>);
    expect(screen.getByRole('note', { name: 'Warning' })).toBeInTheDocument();
  });
});
