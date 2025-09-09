import React from 'react';

type CodeProps = {
  children: React.ReactNode;
};

export function Code({ children }: CodeProps) {
  return (
    <code className="text-secondary rounded-md bg-gray-800 px-1.5 py-0.5 font-mono text-sm">
      {children}
    </code>
  );
}
