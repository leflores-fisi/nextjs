import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function CodeBlock (props) {
  const codeElement = props.children;
  const language = codeElement.props.className.replace("language-", "");
  const codeText = codeElement.props.children;

  return (
    <SyntaxHighlighter
      language={language}
      showLineNumbers={true}
      style={oneDark}
      customStyle={{
        fontSize: 14,
        backgroundColor: "#222222",
      }}
    >
      {codeText}
    </SyntaxHighlighter>
  );
};
