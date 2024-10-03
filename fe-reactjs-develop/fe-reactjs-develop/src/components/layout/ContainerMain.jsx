import React from "react";

function ContainerMain({ children }) {
  // Correctly receive and use 'children' prop
  return <div className="bg-gray-100 container  h-full">{children}</div>;
}

export default ContainerMain;
