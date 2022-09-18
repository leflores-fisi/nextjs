const formatToId = (title) => title.replaceAll(" ", "-").toLowerCase();

export function Heading2 (props) {
  const id = formatToId(props.children);
  return (
    <h2>
      <div className="heading-attachment" id={id}></div>
      <span {...props}></span>
    </h2>
  );
}
export function Heading3 (props) {
  const id = formatToId(props.children);
  return (
    <h3>
      <div className="heading-attachment" id={id}></div>
      <span {...props}></span>
    </h3>
  );
}
export function Heading4 (props) {
  const id = formatToId(props.children);
  return (
    <h4>
      <div className="heading-attachment" id={id}></div>
      <span {...props}></span>
    </h4>
  );
}
