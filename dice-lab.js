/*
 * Returns a function which returns a random number from 1 to sides.
 *     sides    Number of sides on the die the returned function simulates
 */
function d(sides) {
    return function() {
        return Math.floor(Math.random() * sides + 1)
    }
}

/*
 * Returns a function which rolls n of the given die
 *     n    Number of dice to roll and sum
 *     die  Function representing the kind of die to roll
 */
function sum(n, die) {
    return function() {
        var sum = 0
        for (var i = 0; i < n; i++) {
            sum += die()
        }
        return sum
    }
}