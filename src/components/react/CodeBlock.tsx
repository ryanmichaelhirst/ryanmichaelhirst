import { Copy } from 'lucide-react';
import { Highlight, themes } from 'prism-react-renderer';
import { toast } from 'sonner';

export const CodeBlock = (props: { codeBlock: string }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(props.codeBlock);
      toast.success('Text copied');
    } catch (err) {
      toast.error('Failed to copy text');
    }
  };

  return (
    <div className="group relative">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 z-10 cursor-pointer rounded-md bg-gray-800 p-2 text-gray-300 opacity-0 transition-colors group-hover:opacity-100 hover:bg-gray-700 hover:text-white"
        title="Copy code"
      >
        <Copy className="h-4 w-4" />
      </button>
      <Highlight
        theme={themes.jettwaveDark}
        code={props.codeBlock}
        language="tsx"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style} className="rounded-lg p-4">
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({ line })}
                style={{ whiteSpace: 'break-spaces' }}
              >
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};
