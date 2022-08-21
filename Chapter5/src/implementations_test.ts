interface Animal {
    eat(food: string): void
    sleep(hours: number): void
};

class Cat implements Animal {
    eat(food: string) {
        console.info(`I ate ${food}`);
    }

    sleep(hours: number) {
        console.info(`I slept for ${hours} hours.`);
    }
}