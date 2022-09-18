import { useState } from "react";

export default function CopyContentButton( {content} ) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
    catch (error) {
      window.alert("Failed to copy");
    }
  }

  return (
    <div className="copy-to-clipboard" onClick={handleCopy}>
      {
        copied ?
        <span>Copied!</span> :
        <button>Copy</button>
      }
    </div>
  );
}
