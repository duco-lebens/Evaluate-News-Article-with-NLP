import { checkForName } from "../src/client/js/nameChecker";
let names = ["Picard", "Janeway", "Kirk", "Archer", "Georgiou"];
window.alert = jest.fn(); // added to accomply the alert() used by the unit test

describe("Testing the nameChecker functionality", () => {
  test("Testing the checkForName() function", () => {
    names.forEach((name) => {
      expect(checkForName(name)).toBeTruthy();
    });
    window.alert.mockClear(); // be sure to clear te stack: https://stackoverflow.com/questions/55088482/jest-not-implemented-window-alert
  });
});
