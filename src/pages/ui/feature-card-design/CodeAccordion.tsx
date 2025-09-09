import { CodeBlock } from '@/components/react/CodeBlock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

interface CodeAccordionProps {
  title: string;
  code: string;
  language?: string;
  classes?: {
    container?: string;
  };
}

export function CodeAccordion({
  code,
  classes,
  title,
  language,
}: CodeAccordionProps) {
  return (
    <div className={cn('w-full', classes?.container)}>
      <Accordion
        type="single"
        collapsible
        className="rounded-lg border border-neutral-700"
      >
        <AccordionItem value="code" className="border-none">
          <AccordionTrigger className="hover:bg-muted/20 cursor-pointer rounded-lg px-4 py-3 transition-colors hover:no-underline">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-left font-medium">{title}</span>
              <span className="text-muted-foreground bg-primary mr-4 rounded px-2 py-1 text-xs">
                {language}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-0 pb-0">
            <CodeBlock code={code} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
