const formatToId = (title) => title.replaceAll(' ', '-').toLowerCase();

function HeadingBody({ title }) {
  const id = formatToId(title);
  const target = `#${id}`;
  return (
    <a href={target}>
      <div className="heading-attachment" id={id} />
      <span>{title}</span>
    </a>
  );
}
export function Heading2({ children: title }) {
  return (
    <h2>
      <HeadingBody title={title} />
    </h2>
  );
}
export function Heading3({ children: title }) {
  return (
    <h3>
      <HeadingBody title={title} />
    </h3>
  );
}
export function Heading4({ children: title }) {
  return (
    <h4>
      <HeadingBody title={title} />
    </h4>
  );
}
