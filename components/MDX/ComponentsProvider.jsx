import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";

const formatToId = (title) => title.replaceAll(" ", "-").toLowerCase();

function ResponsiveImage (props) {
  return (
    <Image alt={props.alt} layout="responsive" {...props} />
  );
}
function Heading2 (props) {
  const id = formatToId(props.children);
  return (
    <h2 id={id} {...props} />
  );
}
function Heading3 (props) {
  const id = formatToId(props.children);
  return (
    <h3 id={id} {...props} />
  );
}
function Heading4 (props) {
  const id = formatToId(props.children);
  return (
    <h4 id={id} {...props} />
  );
}

function CodeBlock (props) {
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

const components = {
  img: ResponsiveImage,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  pre: CodeBlock,
  // p: Text,
  // pre: Pre,
  // code: InlineCode,
};

export default function MDXComponentsProvider({ props, children }) {
  return (
    <MDXProvider components={components}>{children}
    </MDXProvider>
  );
}
