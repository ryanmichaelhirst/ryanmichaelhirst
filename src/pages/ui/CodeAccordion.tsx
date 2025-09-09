'use client';

import { CodeBlock } from '@/components/react/CodeBlock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

interface CodeAccordionProps {
  codeBlock: string;
  classes?: {
    accordion?: string;
  };
}

export function CodeAccordion({ codeBlock, classes }: CodeAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn('w-full', classes?.accordion)}
    >
      <AccordionItem value="code" className="border-b-0">
        <AccordionTrigger className="w-auto cursor-pointer justify-start gap-4 text-white hover:text-gray-300">
          Code
        </AccordionTrigger>
        <AccordionContent>
          <CodeBlock codeBlock={codeBlock} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
