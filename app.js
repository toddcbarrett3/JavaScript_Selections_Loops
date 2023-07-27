console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 1; i < 100; i++) {
    if(i%2) {
        console.log(i);
    }
    else {
        continue;
    }    
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 1; i <= 100; i++) {
    if(i%3 == 0 && i%5 == 0) {
        console.log(i);
        console.log("FIZZBUZZ");
    }
    else if(i%3 == 0) {
        console.log(i);
        console.log("FIZZ");
    }
    else if(i%5 == 0) {
        console.log(i);
        console.log("BUZZ");
    }
    else {
        continue;
    }
}

// Exercise 3a Section
console.log("EXERCISE 3a:\n==========\n");
let i = 1;
while(i < 100) {
    if(i%2) {
        console.log(i);
        i++;
    }
    else {
        i++;
        continue;
    }    
}

// Exercise 3b Section
console.log("EXERCISE 3b:\n==========\n");
let x = 1;
do {
    if(x%3 == 0 && x%5 == 0) {
        console.log(x);
        console.log("FIZZBUZZ");
        x++;
    }
    else if(x%3 == 0) {
        console.log(x);
        console.log("FIZZ");
        x++;
    }
    else if(x%5 == 0) {
        console.log(x);
        console.log("BUZZ");
        x++;
    }
    else {
        x++;
        continue;
    }
}while(x <= 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);
console.log(`Value: ${value}`);
console.log(`Range: 0-${n}`);
if(value > n) {
    console.log("Did not find value");
}
for(let i = 0; i <= n; i++) {
    if(i == value) {
        console.log("Found Value!");
        break;
    }
    else {
        continue;
    }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let range = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log(start);
console.log(range);
console.log(fizzDivisor);
console.log(buzzDivisor);

for(let i = start; i <= range; i++) {
    if(i%fizzDivisor == 0 && i%buzzDivisor == 0) {
        console.log(i);
        console.log("FIZZBUZZ");
    }
    else if(i%fizzDivisor == 0) {
        console.log(i);
        console.log("FIZZ");
    }
    else if(i%buzzDivisor == 0) {
        console.log(i);
        console.log("BUZZ");
    }
    else {
        continue;
    }
}
