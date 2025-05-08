import React, { useState } from "react";
import { CheckIcon, CopyIcon } from "./ClipboardIcons"; // Import the SVG components

type ClipboardButtonProps = {
  value: string | number;
  size?: number; // Optional size
  color?: string; // Optional color
};

const Clipboard: React.FC<ClipboardButtonProps> = ({
  value,
  size = 16, // Default size
  color = "#619BFF", // Default color
}) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(String(value)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000); // Revert after 3s
    });
  };

  return (
    <button
      onClick={handleClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        backgroundColor: "transparent", // Customize button style if needed
        border: "none",
        cursor: "pointer",
      }}
    >
      {copied ? (
        <CheckIcon size={size} color={color} />
      ) : (
        <CopyIcon size={size} color={color} />
      )}
    </button>
  );
};

export default Clipboard;
