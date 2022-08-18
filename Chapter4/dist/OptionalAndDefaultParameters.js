"use strict";
function log(message, userId) {
    const time = new Date().toLocaleDateString();
    console.log(time, message, userId || "Not signed in");
}
;
log("Page loaded");
log("User singed in", 'da763be');
function log2(message, userId = "Not signed in") {
    const time = new Date().toISOString();
    console.log(time, message, userId);
}
;
log("User clicked on a button", "da763be");
log("User signed out");
function log3(message, context = {}) {
    const time = new Date().toISOString();
    console.log(time, message, context.userId);
}
;
//# sourceMappingURL=OptionalAndDefaultParameters.js.map