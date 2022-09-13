import fs from "fs"
import PageLayout from "@/components/PageLayout"
import PostView from "@/components/PostView"
import styles from "@/styles/PageLayout.module.scss"

export default function Home( { posts } ) {

  console.log(posts)

  return (
    <PageLayout>
      <div className={styles.container}>
        <div>
          My personal blog
        </div>
        <div>
          <ul>
            {
              posts.map((post, i) => <PostView key={i} post={post} />)
            }
          </ul>
        </div>
      </div>
    </PageLayout>
  )
}

export async function getStaticProps() {

  const cwd = process.cwd()
  const fileNames = fs.readdirSync(`${cwd}/pages/posts`);
  const postModules = await Promise.all(
    fileNames.map(async (p) => import(`../pages/posts/${p}`))
  );

  return {
    props: {
      posts: postModules.map((m) => m.meta)
    }
  }
}
