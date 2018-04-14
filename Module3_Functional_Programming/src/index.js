import {tasks} from './tasks.js';
import {getPrivateAndWorkTasks} from './pureFunctions.js';
import {doRamda} from './ramdaFunctions.js';

console.log('=======================PURE FUNCTIONS===================');
console.log(getPrivateAndWorkTasks(tasks));


console.log('=======================RAMDA FUNCTIONS===================');
console.log(doRamda(tasks));
