import { useState } from 'react';

export default function CopyContentButton({ content }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      // eslint-disable-next-line no-alert
      window.alert('Failed to copy');
    }
  };

  return (
    <button
      className="copy-to-clipboard"
      onClick={handleCopy}
      type="button"
    >
      {
        copied
          ? <span>Copied!</span>
          : <span>Copy</span>
      }
    </button>
  );
}
