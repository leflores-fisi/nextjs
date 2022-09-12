import Image from "next/image"
import PageLayout from "@/components/PageLayout"
import styles from "@/styles/PageLayout.module.scss"

export default function Home({ props, posts }) {

  console.log(require("./blog/lorem.mdx"))

  return (
    <PageLayout>
      <div className={styles.container}>
        My personal blog
      </div>
      <div>
        {
          posts.map(post => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <Image src={post.img} width={400} height={200} />
            </div>
          ))
        }
      </div>
    </PageLayout>
  )
}



export function getStaticProps() {



  return {
    props: {
      posts : [
        {
          title: "How to use Next.js",
          id: 1,
          img: "https://themeforest.img.customer.envatousercontent.com/files/383930643/preview.__large_preview.png?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=35eaa538c3b1ebfeadf7bc76348540b5",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        },
        {
          title: "How to learn Next.js",
          id: 2,
          img: "https://raw.githubusercontent.com/strapi/strapi-starter-next-blog/master/screenshot.png",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        }
      ]
    }
  }
}
