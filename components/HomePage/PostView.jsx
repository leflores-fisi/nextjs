import Image from 'next/image';
import Link from 'next/link';

export default function PostView({ post }) {
  return (
    <article key={post.title}>
      <Link href={`/posts/${post.slug}`}>
        <a
          className="post-view-item"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Image
            src={post.image}
            alt={post.title}
            objectFit="cover"
            width={526}
            height={296}
          />
          <h3>{post.title}</h3>
          <div>
            {post.description}
          </div>
        </a>
      </Link>
    </article>
  );
}
