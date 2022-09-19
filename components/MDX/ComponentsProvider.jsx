import { MDXProvider } from '@mdx-js/react';
import ResponsiveImage from '@/components/MDX/ResponsiveImage';
import CodeBlock from '@/components/MDX/CodeBlock';
import { Heading2, Heading3, Heading4 } from '@/components/MDX/Headings';

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

export default function MDXComponentsProvider({ children }) {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  );
}
