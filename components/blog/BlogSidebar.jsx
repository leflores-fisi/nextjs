import { useEffect, useState } from "react";

import styles from "@/styles/BlogLayout.module.scss"
import TableOfContents from "@/components/blog/TableOfContents";

export default function BlogSidebar( { meta, postTextContent } ) {

  const [headings, setHeadings] = useState([]);
  const [sidebarClosed, setSidebarClosed] = useState(false);

  useEffect(() => {
    const htmlHeadings = postTextContent.match(/<h.>(.*?)<\/h.>/g);

    const headingsTable = htmlHeadings.map(htmlHeading => {
      const level = Number(htmlHeading.at(2));
      const title = htmlHeading.replaceAll(/<h.>|<\/h.>/g, "");
      const headingItem = {
        level: level,
        indentation: level*8,
        text: title,
        id: `#${title.replaceAll(" ", "-").toLowerCase()}`,
      }
      return headingItem;
    })
    setHeadings(headingsTable);
  }, []);

  const handleToggle = () => {
    setSidebarClosed(prev => !prev);
  }

  return (
    <aside className={`${styles.aside} ${sidebarClosed ? "closed" : ""}`}>
      <button className={styles.toggleButton} onClick={handleToggle}>
        {(sidebarClosed ? ">>" :"<<")}
      </button>
      {
        (headings.length > 0 && !sidebarClosed) &&
        <TableOfContents title={meta.title} headings={headings} />
      }
    </aside>
  )
}
