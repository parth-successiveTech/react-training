
'use client'
import { useState, useCallback } from 'react';

const useClipboard = (text) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback(() => {
    if (!text) return;

    // Create a temporary textarea to hold the text
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);

    // Select the text
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Execute copy command
    const successful = document.execCommand('copy');

    // Cleanup textarea
    document.body.removeChild(textarea);

    setIsCopied(successful);
    // Reset copied status after 2 seconds
    setTimeout(() => setIsCopied(false), 2000);
  }, [text]);

  return { isCopied, copyToClipboard };
};

export default useClipboard;
