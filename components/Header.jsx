import Image from "next/image";
import Link from  "next/link";
import styles from "@/styles/PageLayout.module.scss"

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>
          <picture className={styles.imglogo}>
            <Image src="/images/logo.jpg" width={24} height={24} />
          </picture>
          <span className={styles.textlogo}>Dev dog</span>
        </a>
      </Link>
      <Link href={"/"}>
        <a>Home</a>
      </Link>
    </header>
  );
}
