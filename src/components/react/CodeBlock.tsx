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
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors opacity-0 group-hover:opacity-100 z-10"
        title="Copy code"
      >
        <Copy className="w-4 h-4" />
      </button>
      <Highlight theme={themes.vsDark} code={props.codeBlock} language="tsx">
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
