'use client';

import { CodeBlock } from '@/components/react/CodeBlock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface CodeAccordionProps {
  codeBlock: string;
}

export function CodeAccordion({ codeBlock }: CodeAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="code" className="border-b-0">
        <AccordionTrigger className="text-white hover:text-gray-300 justify-start gap-4 w-auto">
          Code
        </AccordionTrigger>
        <AccordionContent>
          <CodeBlock codeBlock={codeBlock} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
