import PostView from "@/components/HomePage/PostView"
import styles from "@/styles/HomeLayout.module.scss"

export default function LatestPosts({ posts }) {
  return (
    <section>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <PostView key={post.title} post={post} />
        ))}
      </ul>
    </section>
  );
}
