import NameOfPerson from "./index";

describe("index", () => {
  let fullName: NameOfPerson;
  let threeNames: NameOfPerson;
  let firstName: NameOfPerson;

  beforeEach(() => {
    fullName = new NameOfPerson({ firstName: "John", lastName: "Smith" });
    threeNames = new NameOfPerson({ firstName: "John", lastName: "St. Clair" });
    firstName = new NameOfPerson({ firstName: "John" });
  });

  test("full", () => {
    expect(fullName.full()).toBe("John Smith");
    expect(threeNames.full()).toBe("John St. Clair");
    expect(firstName.full()).toBe("John");
  });

  test("familiar", () => {
    expect(fullName.familiar()).toBe("John S.");
    expect(threeNames.familiar()).toBe("John S.");
    expect(firstName.familiar()).toBe("John");
  });

  test("abbreviated", () => {
    expect(fullName.abbreviated()).toBe("J. Smith");
    expect(threeNames.abbreviated()).toBe("J. St. Clair");
    expect(firstName.abbreviated()).toBe("John");
  });

  test("sorted", () => {
    expect(fullName.sorted()).toBe("Smith, John");
    expect(threeNames.sorted()).toBe("St. Clair, John");
    expect(firstName.sorted()).toBe("John");
  });

  test("possessive", () => {
    expect(fullName.possessive()).toBe("John Smith's");
    expect(threeNames.possessive()).toBe("John St. Clair's");
    expect(firstName.possessive()).toBe("John's");
  });

  test("possessive with an s", () => {
    const fullNameWithS = new NameOfPerson({
      firstName: "John",
      lastName: "Smits",
    });
    expect(fullNameWithS.possessive()).toBe("John Smits'");
  });

  test("initials", () => {
    expect(fullName.initials()).toBe("JS");
    expect(threeNames.initials()).toBe("JS");
    expect(firstName.initials()).toBe("J");
  });
});
