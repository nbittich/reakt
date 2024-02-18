import { Reakt } from "./reakt.js";

export function CounterManualComponent(getCount, setCount) {
  const div = document.createElement("div");

  div.innerHTML = `
       <button>incr</button>
       <button>decr</button>
       <button>del</button>
       <p></p>
`;
  const [buttonIncr, buttonDecr, buttonDel] = div.querySelectorAll("button");
  const p = div.querySelector("p");

  buttonIncr.onclick = () => setCount(getCount() + 1);
  buttonDecr.onclick = () => setCount(getCount() - 1);
  buttonDel.onclick  = () => Reakt.destroyComponent(div); 

  Reakt.registerComponent(div, getCount, [
    () => (p.innerText = `Count: ${getCount()}`),
  ]);
  return div;
}
