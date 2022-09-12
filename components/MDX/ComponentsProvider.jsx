import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";

const formatToId = (title) => title.replaceAll(" ", "-").toLowerCase();

const ResponsiveImage = (props) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);
const Heading2 = (props) => {
  const id = formatToId(props.children);
  return (
    <h2 id={id} {...props} />
  );
};
const Heading3 = (props) => {
  const id = formatToId(props.children);
  return (
    <h3 id={id} {...props} />
  );
};
const Heading4 = (props) => {
  const id = formatToId(props.children);
  return (
    <h4 id={id} {...props} />
  );
};

const components = {
  img: ResponsiveImage,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
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
