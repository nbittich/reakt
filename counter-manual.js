import { reakt } from "./reakt.js";

export function CounterManualComponent(getCount, setCount) {
  const div = document.createElement("div");

  div.innerHTML = `
       <button>incr</button>
       <button>decr</button>
       <p></p>
`;
  const [buttonIncr, buttonDecr] = div.querySelectorAll("button");
  const p = div.querySelector("p");
  reakt(() => (p.innerText = `Counter value: ${getCount()}`));

  buttonIncr.onclick = () => setCount(getCount() + 1);
  buttonDecr.onclick = () => setCount(getCount() - 1);

  return div;
}
