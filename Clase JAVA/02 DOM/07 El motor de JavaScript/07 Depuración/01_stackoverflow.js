function recursiva() {
    return recursiva();
}

recursiva();

// Stack Overflow
// []
// [recursiva]
// [recursiva, recursiva]
// [recursiva, recursiva, recursiva]
// [recursiva, recursiva, recursiva, ...
// Maximun call stack size exceeded