/**
 * Get the tests to pass by changing what they expect
 */


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

test("myFunction", () => {expect(myFunction()).toEqual("")});
test("firstFunction", () => {expect(firstFunction()).toEqual("")});
test("secondFunction", () => {expect(secondFunction()).toEqual("")});
test("arrowFunction", () => {expect(arrowFunction()).toEqual("")});
test("anotherArrowFunction", () => {expect(anotherArrowFunction("arg 1")).toEqual("")});

//now mess things up!
let spare = myFunction;
let myFunction = secondFunction;
secondFunction = arrowFunction;
arrowFunction = anotherArrowFunction;
anotherArrowFunction = spare;

test("myFunction", () => {expect(myFunction()).toEqual("")});
test("firstFunction", () => {expect(firstFunction()).toEqual("")});
test("secondFunction", () => {expect(secondFunction()).toEqual("")});
test("arrowFunction", () => {expect(arrowFunction()).toEqual("")});
test("anotherArrowFunction", () => {expect(anotherArrowFunction("arg 1")).toEqual("")});
