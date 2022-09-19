const formatToId = (title) => title.replaceAll(' ', '-').toLowerCase();

export function Heading2({ children: title }) {
  const id = formatToId(title);
  return (
    <h2>
      <div className="heading-attachment" id={id} />
      <span>{title}</span>
    </h2>
  );
}
export function Heading3({ children: title }) {
  const id = formatToId(title);
  return (
    <h3>
      <div className="heading-attachment" id={id} />
      <span>{title}</span>
    </h3>
  );
}
export function Heading4({ children: title }) {
  const id = formatToId(title);
  return (
    <h4>
      <div className="heading-attachment" id={id} />
      <span>{title}</span>
    </h4>
  );
}
