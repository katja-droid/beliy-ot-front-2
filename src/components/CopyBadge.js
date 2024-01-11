import React, { useRef } from 'react';

const CopyBadge = ({ textToCopy }) => {
  const textRef = useRef(null);

  const handleCopyClick = () => {
    textRef.current.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  };

  return (
    <div>
      <input
        type="text"
        value={textToCopy}
        readOnly
        ref={textRef}
        style={{ position: 'absolute', left: '-9999px'}}
      />
      <button  onClick={handleCopyClick} style={{ backgroundColor: 'rgb(254,238,131)', fontSize: '1.4em', fontWeight: 'bold', border: 'none'}}>Скопировать</button>
    </div>
  );
};

export default CopyBadge;