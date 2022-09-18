import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

export default function CopyContentButton( {content} ) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    setCopied(true);
    window.setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <CopyToClipboard text={content} onCopy={handleCopy}>
      <div className="copy-to-clipboard">
        {
          copied ?
          <span>Copied!</span> :
          <button>Copy</button>
        }
      </div>
    </CopyToClipboard>
  );
}
