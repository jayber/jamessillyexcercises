/**
 * Create a program that takes an array of full names and 
 * returns a string containing each name turned into just
 * its initial letters, separated by a comma.
 * Eventually the test here should pass, but you should
 * write your own tests on the way
 * 
 * This is about breaking down the problem into smaller problems
 * and solving them one at a time.
 * 
 * First write a test for a smaller part of the problem, then write
 * code that makes that test pass, then write another test, that either
 * tests a separate part of the problem, or the combination of parts, etc.
 * 
 * Given a problem that is about doing the same thing on every element
 * of an array, what would be a smaller sub-problem on the way?
 * 
 * How do you separate the code for each sub-problem so that you can test
 * it individually?
 */


test("initialise name", () => {
    expect(nameInitialiser(["Karla Grajales", "Karleen Richards", "Khadija Haji", "Gayle Ngozi", "James Bromley"])).toEqual("KG, KR, KH, GN, JB");
  });