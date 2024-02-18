import { useState, Reakt } from "./reakt.js";
import { CounterManualComponent } from "./counter-manual.js";

const [getCounter, setCounter] = useState(0);

const   component = CounterManualComponent(getCounter, setCounter);
const _component2 = CounterManualComponent(getCounter, setCounter);
const _component3 = CounterManualComponent(getCounter, setCounter);
const _component4 = CounterManualComponent(getCounter, setCounter);
const _component5 = CounterManualComponent(getCounter, setCounter);

setTimeout(() => Reakt.destroyComponent(component), 15000);
