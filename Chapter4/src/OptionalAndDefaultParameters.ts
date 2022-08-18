function log(message: string, userId?: string) {
    const time = new Date().toLocaleDateString();
    console.log(time, message, userId || "Not signed in");
};

log("Page loaded");
log("User singed in", 'da763be');

function log2(message: string, userId = "Not signed in") {
    const time = new Date().toISOString();
    console.log(time, message, userId);
};

log("User clicked on a button", "da763be");
log("User signed out");

declare type Context = {
    appId?: string,
    userId?: string
};

function log3(message: string, context: Context = {}) {
    const time = new Date().toISOString();
    console.log(time, message, context.userId);
};