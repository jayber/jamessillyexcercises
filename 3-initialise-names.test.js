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

// function nameInitialiser(names) {
//   // let result = initilas.join(",");
//   // names.forEach(name => initilas.push(name.split(" ").map((n)=>n[0]).join("")))

//   return names
//     .map((name) =>
//       name
//         .split(" ")
//         .map((n) => n[0])
//         .join("")
//     )
//     .join(", ");
// }
function nameInitialiser(names) {
  const initials = names.map((name) =>
    name
      .split(/\s+|-/)
      .map((n) => n[0])
      .join("")
  );
  const formattedInitials = initials.join(", ");

  return formattedInitials;
}

// test cases
test("initialise name", () => {
  expect(
    nameInitialiser([
      "Karla Grajales",
      "Karleen Richards",
      "Khadija Haji",
      "Gayle Ngozi",
      "James Bromley",
    ])
  ).toEqual("KG, KR, KH, GN, JB");
});
test("initialise name with one name", () => {
  expect(nameInitialiser(["Karla"])).toEqual("K");
});

test("initialise name with two names", () => {
  expect(nameInitialiser(["Karla Grajales", "Karleen Richards"])).toEqual(
    "KG, KR"
  );
});

test("initialise name with three names", () => {
  expect(
    nameInitialiser(["Karla Grajales", "Karleen Richards", "Khadija Haji"])
  ).toEqual("KG, KR, KH");
});

test("initialise name with hyphenated names", () => {
  expect(
    nameInitialiser(["Jean-Luc Picard", "Beverly Crusher", "Geordi La Forge"])
  ).toEqual("JLP, BC, GLF");
});

test("initialise name with middle name", () => {
  expect(
    nameInitialiser(["James Tiberius Kirk", "Spock", "Leonard McCoy"])
  ).toEqual("JTK, S, LM");
});
