import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import CopyContentButton from "../blog/CopyContentButton";

export default function CodeBlock (props) {

  const codeElement = props.children;
  const language = codeElement.props.className.replace("language-", "");
  const codeText = codeElement.props.children;

  const customStyle = {
    fontSize: 14,
    backgroundColor: "#222222",
  }

  return (
    <div className="codeblock">
      <CopyContentButton content={codeText}/>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={customStyle}
        showLineNumbers={true}
      >
        {codeText}
      </SyntaxHighlighter>
    </div>
  );
};
