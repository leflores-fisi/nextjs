import styles from "@/styles/BlogLayout.module.scss";

export default function ContentsTable({ title, headings }) {
  return (
    <nav className={styles.tableOfContents}>
      <div className={styles.postTitle}>{title}</div>
      <ol>
        {
          headings.length &&
          headings.map((heading, index) => {
            const { level, indentation, text, id } = heading;
            const margin = {
              marginLeft: ((level > 2)? `${indentation}px` : 0)
            }
            return (
              <li key={index}>
                <a href={id} style={margin}>
                  <small>{level}</small>
                  <span>{text}</span>
                </a>
              </li>
            )
          })
        }
      </ol>
    </nav>
  );
}
