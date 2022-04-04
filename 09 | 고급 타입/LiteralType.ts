let eventLiteral: "keyup" = "keyup";
//let eventLiteral: "keyup" = "keyup2"; => 불가능

type EventType2 = "keyup" | "mouseover";
const myEvent: EventType2 = "keyup";

function on(event: EventType2, callback: (message: string) => any) {
    console.log(typeof event, event);
    callback("Called callback function!!!");   
};

on(myEvent, (message) => console.log(message));
