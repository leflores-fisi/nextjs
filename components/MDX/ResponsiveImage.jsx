import Image from 'next/image';

export default function ResponsiveImage(props) {
  const {
    src, alt, width, height,
  } = props;
  return (
    <Image
      alt={alt}
      layout="responsive"
      src={src}
      width={width}
      height={height}
    />
  );
}
