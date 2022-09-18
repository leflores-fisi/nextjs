import styles from "@/styles/BlogLayout.module.scss";

export default function TableOfContents({ title, headings }) {

  return (
    <nav className={styles.tableOfContents}>
      <div className={styles.postTitle}>{title}</div>
      <ol>
        {
          headings.length &&
          headings.map((heading, index) => (
            <Heading heading={heading} key={index} />
          ))
        }
      </ol>
    </nav>
  );
}

function Heading ({ heading }) {
  const { id, level, text } = heading;

  return (
    <li>
      <a href={id} style={{
        marginLeft: (level > 2? `${(level-2)*24}px` : 0)
      }}>
        <small>{level}</small>
        <span>{text}</span>
      </a>
    </li>
  );
}
