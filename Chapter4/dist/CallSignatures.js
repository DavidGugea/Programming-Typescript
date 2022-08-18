"use strict";
const log4 = (message, userId = "Not signed in") => {
    const time = new Date().toISOString();
    console.log(time, message, userId);
};
//# sourceMappingURL=CallSignatures.js.map