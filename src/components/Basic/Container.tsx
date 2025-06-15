import React, { PropsWithChildren } from "react";

/** - Container元件 */
export default function Container({ children }: PropsWithChildren) {
  return <div className="container mx-auto">{children}</div>;
}
