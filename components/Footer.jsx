import Image from "next/image"
import styles from "@/styles/HomeLayout.module.scss"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <span>Created by</span>
        <a href="https://github.com/leflores-fisi">leflores</a>
      </div>
      <div>
        <span>Hosted by</span>
        <a href="https://nextjs.org/"> 
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </div>
    </footer>
  )
}
