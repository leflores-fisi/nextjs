import { useEffect, useState } from 'react';

import styles from '@/styles/BlogLayout.module.scss';
import TableOfContents from '@/components/blog/TableOfContents';
import useLocalStorage from '@/hooks/useLocalStorage';

const STATUS_STORAGE_KEY = 'post-sidebar-closed';

export default function BlogSidebar({ meta, postTextContent }) {
  const [headings, setHeadings] = useState([]);
  const [isClosed, setIsClosed] = useLocalStorage(STATUS_STORAGE_KEY, false);

  useEffect(() => {
    const htmlHeadings = postTextContent.match(/<h.>(.*?)<\/h.>/g);

    const headingsTable = htmlHeadings.map((htmlHeading) => {
      const level = Number(htmlHeading.at(2)); // "<h1..." -> 1
      const title = htmlHeading.replaceAll(/<h.>|<\/h.>/g, '');
      const headingItem = {
        level,
        text: title,
        id: `#${title.replaceAll(' ', '-').toLowerCase()}`,
      };
      return headingItem;
    });
    setHeadings(headingsTable);
  }, [postTextContent]);

  const handleToggle = () => {
    setIsClosed(!isClosed);
  };

  return (
    <aside className={`${styles.aside} ${isClosed ? 'closed' : ''}`}>
      <button type="button" className={styles.toggleButton} onClick={handleToggle}>
        {(isClosed ? '>>' : '<<')}
      </button>
      {
        (headings.length > 0 && !isClosed)
        && <TableOfContents title={meta.title} headings={headings} />
      }
    </aside>
  );
}
