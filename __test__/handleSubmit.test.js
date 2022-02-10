import { handleSubmit } from "../src/client/js/formHandler";

describe("Testing the handleSubmit functionality", () => {
  // The test() function has two arguments - a string description, and an actual test as a callback function.
  test("test submit process handling", () => {
    // Define the expected output, if any, in the form of variables/array
    // Define the input for the function, if any, in the form of variables/array
    // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
    // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
    expect(handleSubmit).toBeDefined();
  });
});
