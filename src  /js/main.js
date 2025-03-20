import { main } from "./body.js";
import { handleKeyEvents } from "./events.js";

const a = main();
a.initialiseObjects();

handleKeyEvents(a.snake, a);



