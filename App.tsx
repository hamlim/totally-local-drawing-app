import { css } from "restyle";
import { Tldraw } from "tldraw";
import { Shell } from "./components/Shell";

export function App() {
  let [classname, Styles] = css({
    position: "fixed",
    inset: 0,
  });
  return (
    <Shell>
      <Styles />
      <div className={classname}>
        <Tldraw />
      </div>
    </Shell>
  );
}
