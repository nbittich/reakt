import { useState } from "./reakt.js";
import { CounterManualComponent } from "./counter-manual.js";

const [getCounter, setCounter] = useState(0);

CounterManualComponent(getCounter, setCounter);
