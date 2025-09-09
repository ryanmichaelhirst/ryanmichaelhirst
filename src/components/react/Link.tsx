import { cn } from '@/lib/utils';
import { Check, Link as LinkIcon } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';

interface LinkIconProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export const Link: React.FC<LinkIconProps> = ({
  children,
  id,
  className = '',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      const url = `${window.location.origin}${window.location.pathname}#${id}`;
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success('Copied link');

      // Update the URL hash
      window.history.pushState(null, '', `#${id}`);

      // Scroll to the element
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
      toast.error('Failed to copy link');
    }
  };

  return (
    <div className={cn('group mb-1 flex items-center gap-1.5', className)}>
      <h2 id={id} className="text-xl font-medium">
        {children}
      </h2>
      <a
        href={`#${id}`}
        onClick={handleCopyLink}
        className="cursor-pointer rounded p-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-gray-800"
        aria-label={copied ? 'Link copied!' : 'Copy link to this section'}
        title={copied ? 'Link copied!' : 'Copy link to this section'}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-400" />
        ) : (
          <LinkIcon className="h-4 w-4 text-gray-400 transition-colors hover:text-white" />
        )}
      </a>
    </div>
  );
};
