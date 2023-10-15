import { useState, APP_DIV } from "./reakt.js";
import { CounterManualComponent } from "./counter-manual.js";

const [getCounter, setCounter] = useState(0);

const counterManual = CounterManualComponent(getCounter, setCounter);

APP_DIV.appendChild(counterManual);
