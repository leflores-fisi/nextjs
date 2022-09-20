import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import CopyContentButton from '@/components/Blog/CopyContentButton';

export default function CodeBlock({ children: codeElement }) {
  const language = codeElement.props.className.replace('language-', '');
  const codeText = codeElement.props.children;

  const customStyle = {
    fontSize: 14,
    backgroundColor: '#222222',
  };

  return (
    <div className="codeblock">
      <CopyContentButton content={codeText} />
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={customStyle}
        showLineNumbers
      >
        {codeText}
      </SyntaxHighlighter>
    </div>
  );
}
