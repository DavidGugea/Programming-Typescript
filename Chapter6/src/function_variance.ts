
class Animal { }

class Bird extends Animal {
    chirp() {}
}

class Crow extends Bird {
    caw() {}
}

function chirp(bird: Bird): Bird {
    bird.chirp();
    return bird;
}

