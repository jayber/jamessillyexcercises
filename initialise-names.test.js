/**
 * Create a program that takes an array of full names and 
 * returns a string containing each name turned into just
 * its initial letters, separated by a comma.
 * Eventually the test here should pass, but you should
 * write your own tests on the way
 */


test("initialise name", () => {
    expect(nameInitialiser(["Karla Grajales", "Karleen Richards", "Khadija Haji", "Gayle Ngozi", "James Bromley"])).toEqual("KG, KR, KH, GN, JB");
  });