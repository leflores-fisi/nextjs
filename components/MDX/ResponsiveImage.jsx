
export default function ResponsiveImage (props) {
  return (
    <Image alt={props.alt} layout="responsive" {...props} />
  );
}
