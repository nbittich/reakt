import { Reakt } from "./reakt.js";

export function CounterManualComponent(getCount, setCount) {
  const div = document.createElement("div");

  div.innerHTML = `
       <button>incr</button>
       <button>decr</button>
       <p></p>
`;
  const [buttonIncr, buttonDecr] = div.querySelectorAll("button");
  const p = div.querySelector("p");

  buttonIncr.onclick = () => setCount(getCount() + 1);
  buttonDecr.onclick = () => setCount(getCount() - 1);

  Reakt.registerComponent(div, getCount, [
    () => (p.innerText = `Count: ${getCount()}`),
  ]);
  return div;
}
