import React from "react";

const TruncateText = (props) => {
  //let the brief introduction cut short with "..."
  const maxLength = props.maxLength;
  let truncatedText = props.text;

  if (truncatedText.length > maxLength) {
    // find the last space in the truncated text
    const lastSpaceIndex = truncatedText.lastIndexOf(" ", maxLength - 3);
    if (!lastSpaceIndex) {
      truncatedText = truncatedText.substring(0, maxLength - 3) + "...";
    } else {
      // truncate the text at the last space and add "..."
      truncatedText = truncatedText.substring(0, lastSpaceIndex) + "...";
    }
  }

  return <span>{truncatedText}</span>;
};

export default TruncateText;
