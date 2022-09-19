import Image from 'next/image';
import Link from 'next/link';

export default function PostView({ post }) {
  return (
    <li key={post.title}>
      <Link href={`/posts/${post.slug}`}>
        <a>
          <Image
            src={post.image}
            alt={post.title}
            width={300}
            height={200}
          />
          <h3>{post.title}</h3>
          <div>
            {post.description}
          </div>
        </a>
      </Link>
    </li>
  );
}
