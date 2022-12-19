/**
 * Get the tests to pass by changing what they expect
 * NOT what the functions do, by looking at what the 
 * functions actually do.
 * (NOT just looking at the errors and copying and pasting!!)
 */

//dont't change these
function myFunction() {
    return "ran myFunction";
}

let firstFunction = myFunction

let secondFunction = function() {
    return "ran secondFunction"
}

let arrowFunction = () => {
    return "ran arrow function";
}

let anotherArrowFunction = x => {
    return "ran another arrow function with parameter value: " + x;
}

//fill in the correct string argument passed to toEquals()
test("myFunction", () => {expect(myFunction()).toEqual("")});
test("firstFunction", () => {expect(firstFunction()).toEqual("")});
test("secondFunction", () => {expect(secondFunction()).toEqual("")});
test("arrowFunction", () => {expect(arrowFunction()).toEqual("")});
test("anotherArrowFunction", () => {expect(anotherArrowFunction("arg 1")).toEqual("")});

/* Once you have those working, uncomment this section and get the second
set of tests to run

//don't change this
//now mess things up!
let spare = myFunction;
myFunction = secondFunction;
secondFunction = arrowFunction;
arrowFunction = anotherArrowFunction;
anotherArrowFunction = spare; 

//fill in the correct string argument passed to toEquals()
test("myFunction2", () => {expect(myFunction()).toEqual("")});
test("firstFunction2", () => {expect(firstFunction()).toEqual("")});
test("secondFunction2", () => {expect(secondFunction()).toEqual("")});
test("arrowFunction2", () => {expect(arrowFunction()).toEqual("")});
test("anotherArrowFunction2", () => {expect(anotherArrowFunction("arg 1")).toEqual("")});
*/
