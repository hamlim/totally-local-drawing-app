import type { ReactNode } from "react";
import { css } from "restyle";

export function Shell({ children }: { children: ReactNode }) {
  let [classname, Styles] = css({
    fontFamily: "Inter",
  });
  return (
    <html lang="en">
      <head suppressHydrationWarning>
        <title>Totally Local Drawing App</title>
      </head>
      <body className={classname}>
        <link href="./inter.css" rel="stylesheet" />
        <link href="./tldraw-2.4.4-styles.css" rel="stylesheet" />
        <Styles />
        {children}
      </body>
    </html>
  );
}
