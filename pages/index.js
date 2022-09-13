import Image from "next/image"
import PageLayout from "@/components/PageLayout"
import styles from "@/styles/PageLayout.module.scss"
import fs from "fs"

export default function Home( { posts } ) {

  return (
    <PageLayout>
      <div className={styles.container}>
        <div>
          My personal blog
        </div>
        <div>
          <ul>
            {
              posts.map((post, index) => {
                return (
                  <li key={index}>
                    <h3>{post.title}</h3>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={300}
                      height={200}
                    />
                    <div>
                      {post.description}
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </PageLayout>
  )
}

export async function getStaticProps() {

  const cwd = process.cwd()
  const fileNames = fs.readdirSync(`${cwd}/pages/blog`);
  const postModules = await Promise.all(
    fileNames.map(async (p) => import(`../pages/blog/${p}`))
  );

  return {
    props: {
      posts: postModules.map((m) => m.meta)
    }
  }
}
