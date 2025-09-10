import type React from 'react';

type LinkUnderlineProps = {
  href: string;
  children: React.ReactNode;
};

export function LinkUnderline({ href, children }: LinkUnderlineProps) {
  return (
    <a
      href={href}
      className="cursor-pointer transition-colors hover:text-blue-400"
    >
      {children}
    </a>
  );
}
