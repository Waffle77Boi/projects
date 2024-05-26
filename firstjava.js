const numberOfLegs = (animal, count) => {
    switch (animal) {
        case "pig":
        case "cow":
        case "dog":
        case "sheep":
            return count * 4;
        case "chicken":
        case "duck":
            return count * 2;
        case "Humfry":
            return count * 3;
    }
}
const legCount = [
    {animal: "pig", count: 15},
    {animal:"cow", count: 45},
    {animal:"dog", count: 5},
    {animal:"sheep", count: 20},
    {animal: "chicken", count: 20},
    {animal:"duck", count: 10},
    {animal:"Humfry", count: 1},
].reduce((acc, {animal, count}) => acc += numberOfLegs(animal, count),0);

console.log(`You have ${legCount} legs on your farm.`);