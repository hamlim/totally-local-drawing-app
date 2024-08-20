import packageJSON from "../package.json" with { type: "json" };

export function Scripts() {
  return (
    <>
      {/* <script
        type="importmap"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{
          __html: "",
        }}
      /> */}
      {/* <script type="module" src="/client.mjs" /> */}
    </>
  );
}
