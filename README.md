# dice-lab
This is the start of a library for experimenting with rules about dice, for RPGs, etc.

I've long wanted something like a domain specific language for RPG rules involving dice. But the thing that finally made this (start to) work is the idea of representing dice as functions AND passing the functions as aguments.

Without functional programming, you can have a function d6() that returns a random number 1 to 6. But some function like rollDice(3, d6()) will only return 3, 6, 9, 12, 15, or 18 because d6() was evaluated only once and only the numberical result was passed to the rollDice function.

However, if the die is represented by a function which is itself passed as data, then a rollDice(n, die) can call the "die" function n times and get a newly "rolled" value each time.

And yes, I did learn a little Lisp way back when. But I didn't see how it applied to dice until I started doing functional JavaScript.
