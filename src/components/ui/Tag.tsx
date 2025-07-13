import React from "react";

const Tag: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div className="text-xs bg-teal-800 text-teal-300 bg-opacity-50 px-2.5 py-1.5 rounded-2xl">
      {content}
    </div>
  );
};

export default Tag;
