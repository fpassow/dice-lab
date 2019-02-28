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

/*
 * Returns the average of n rolls of the given die.
 * Note: This returns a number, not a function.
 */
function avj(n, die) {
    var sum = 0
    for (var i = 0; i < n; i++) {
         sum += die()
    }
    return sum/n
}

/*
 * Return a function that executes any of its arguments which are functions, and compares the results.
 */
function gt(x, y) {
    return function() {
        return (_evalify(x) > _evalify(y)) ? 1 : 0
    }
}
function ge(x, y) {
    return function() {
        return (_evalify(x) >= _evalify(y)) ? 1 : 0
    }
}
function lt(x, y) {
    return function() {
        return (_evalify(x) < _evalify(y)) ? 1 : 0
    }
}
function lt(x, y) {
    return function() {
        return (_evalify(x) <= _evalify(y)) ? 1 : 0
    }
}


//If x is a function, execute it and return the result.
//Otherwise, just return x.
function _evalify(x) {
    return  (typeof x === 'function') ? x() : x
}

/*
 * Takes a single argumnet function as the their arg.
 * For each integer from fist to last, inclusive, calls the given
 *    function and adds the result to an array where the array index is the input to the function.
 */
function scan(first, last, func) {
    out = []
    for (var i = first; i <= last; i++) {
        out[i] = func(i)
    }
    return out
}

///////////////Using it//////////////////

//In the combat system for Steve Jacson's "The Fantasy Trip" RPG
// the roll to hit is (Dexterity >= 3d6)

//This returns a function that rolls to-hit for a character with a given dx:
//  ge(dx, sum(3, d(6)))

//This returns a function that estimates the probability of hitting for a given dx
//by tryng the roll 1000 times:
//  avj(1000, ge(dx, sum(3, d(6))))

//We can use the "scan" function to estimate the change to hit for each dexterity value from 3 to 18:
//  scan(3, 18, (dx)=>(avj(1000, ge(dx, sum(3, d(6))))))
