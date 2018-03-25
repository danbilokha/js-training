import "./index.css";
import "./app/app.ts";

console.log("hello ts");

setInterval(() => console.log(say("hi")), 2000);

function say(word: string) {
    return word;
}
