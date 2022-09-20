import styles from '@/styles/Blog/PostSidebar.module.scss';

export default function TableOfContents({ title, headings }) {
  return (
    <nav className={styles.tableOfContents}>
      <div className={styles.postTitle}>{title}</div>
      <ol>
        {
          headings.length
          && headings.map((props, index) => (
            <Heading headingProps={props} key={index} />
          ))
        }
      </ol>
    </nav>
  );
}

function Heading({ headingProps }) {
  const { id, level, text } = headingProps;

  return (
    <li>
      <a
        href={id}
        style={{
          marginLeft: (level > 2 ? `${(level - 2) * 24}px` : 0),
        }}
      >
        <small>{level}</small>
        <span>{text}</span>
      </a>
    </li>
  );
}
