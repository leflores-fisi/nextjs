const formatToId = (title) => title.replaceAll(" ", "-").toLowerCase();

export function Heading2 (props) {
  const id = formatToId(props.children);
  return (
    <h2 id={id} {...props} />
  );
}
export function Heading3 (props) {
  const id = formatToId(props.children);
  return (
    <h3 id={id} {...props} />
  );
}
export function Heading4 (props) {
  const id = formatToId(props.children);
  return (
    <h4 id={id} {...props} />
  );
}
