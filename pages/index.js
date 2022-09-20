import fs from 'fs';
import HomeLayout from '@/components/HomePage/HomeLayout';
import LatestPosts from '@/components/HomePage/LatestPosts';
import styles from '@/styles/HomeLayout.module.scss';

export default function Home({ posts }) {
  return (
    <HomeLayout>
      <section className={styles.sectionContainer}>
        <section className={styles.sidebar}>
          <h1>Posts</h1>
          My personal blog
        </section>
        <LatestPosts posts={posts} />
      </section>
    </HomeLayout>
  );
}

export async function getStaticProps() {
  const cwd = process.cwd();
  const fileNames = fs.readdirSync(`${cwd}/pages/posts`);
  const postModules = await Promise.all(
    fileNames.map(async (p) => import(`../pages/posts/${p}`)),
  );

  return {
    props: {
      posts: postModules.map((m) => m.meta),
    },
  };
}
