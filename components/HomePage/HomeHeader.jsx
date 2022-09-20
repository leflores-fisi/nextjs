import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home/HomeHeader.module.scss';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollHeigth = e.target.documentElement.scrollTop;
      const scrolled = (scrollHeigth > 40);
      setIsScrolled(scrolled);
    };
    document?.addEventListener('scroll', handleScroll);

    return () => {
      document?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <Link href="/">
        <a className={styles.logo}>
          <picture className={styles.imglogo}>
            <Image
              alt="Dev Dog Logo"
              src="/images/logo.jpg"
              width={24}
              height={24}
            />
          </picture>
          <span className={styles.textlogo}>Dev dog</span>
        </a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
    </header>
  );
}
