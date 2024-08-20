import { renderToReadableStream } from "react-dom/server";
import { App } from "./App";
import packageJSON from "./package.json" with { type: "json" };

Bun.serve({
  port: 80,
  async fetch(req: Request) {
    let path = new URL(req.url).pathname;
    let method = req.method;

    switch (`${method} ${path}`) {
      case "GET /":
        return new Response(
          await renderToReadableStream(<App />, {
            bootstrapModules: ["/client.js?q=1"],
            // @ts-expect-error - F me - this is undocumented but supported - https://github.com/reactjs/react.dev/issues/7119
            importMap: {
              imports: {
                react: `https://esm.sh/react@${packageJSON.dependencies.react}`,
                "react/": `https://esm.sh/react@${packageJSON.dependencies.react}/`,
                "react-dom": `https://esm.sh/react-dom@${packageJSON.dependencies["react-dom"]}`,
                "react-dom/": `https://esm.sh/react-dom@${packageJSON.dependencies["react-dom"]}/`,
              },
            },
          }),
          {
            headers: { "content-type": "text/html" },
          },
        );
      case "GET /client.js": {
        return new Response(Bun.file("./dist/client.js"));
      }
      case "GET /inter.css": {
        return new Response(Bun.file("./inter.css"));
      }
      case "GET /tldraw-2.4.4-styles.css": {
        return new Response(Bun.file("./tldraw-2.4.4-styles.css"));
      }
      default:
        return new Response("Not Found", { status: 404 });
    }
  },
});
