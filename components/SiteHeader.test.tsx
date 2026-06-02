import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SiteHeader } from '@/components/SiteHeader';

// Mock next/link so we don't need a router context for these tests
vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

// Mock usePathname to return a known value
let mockPathname = '/';
vi.mock('next/navigation', () => ({
  usePathname: () => mockPathname,
}));

describe('SiteHeader', () => {
  beforeEach(() => {
    mockPathname = '/';
    // Reset body overflow lock between tests
    document.body.style.overflow = '';
  });

  it('renders the wordmark linking to home', () => {
    render(<SiteHeader />);
    const homeLink = screen.getByLabelText(/home/i);
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('renders the mobile menu toggle button', () => {
    render(<SiteHeader />);
    const toggle = screen.getByRole('button', { name: /open menu/i });
    expect(toggle).toBeInTheDocument();
  });

  it('toggles aria-expanded and label when the hamburger is clicked', () => {
    render(<SiteHeader />);
    const toggle = screen.getByRole('button', { name: /open menu/i });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument();

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('locks body scroll while the mobile menu is open', () => {
    render(<SiteHeader />);
    const toggle = screen.getByRole('button', { name: /open menu/i });

    expect(document.body.style.overflow).toBe('');
    fireEvent.click(toggle);
    expect(document.body.style.overflow).toBe('hidden');
    fireEvent.click(toggle);
    expect(document.body.style.overflow).toBe('');
  });
});
