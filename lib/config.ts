export const siteConfig = {
  name: 'Acme Studio',
  description: 'A clean Next.js website template with real URLs and content as code.',
  url: 'https://example.com',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Journal' },
    { href: '/changelog', label: 'Changelog' },
    { href: '/contact', label: 'Contact' },
  ],

  legal: [
    { href: '/terms', label: 'Terms' },
    { href: '/privacy', label: 'Privacy' },
  ],
} as const;
