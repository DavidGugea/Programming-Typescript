"use strict";
class Animal {
}
class Bird extends Animal {
    chirp() { }
}
class Crow extends Bird {
    caw() { }
}
function chirp(bird) {
    bird.chirp();
    return bird;
}
//# sourceMappingURL=function_variance.js.map