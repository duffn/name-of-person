export interface INameOfPerson {
  full(): string;
  familiar(): string;
  abbreviated(): string;
  sorted(): string;
  possessive(): string;
  initials(): string;
}

export default class NameOfPerson implements INameOfPerson {
  private firstName: string;
  private lastName: string | undefined;

  constructor({
    firstName,
    lastName,
  }: {
    firstName: string;
    lastName?: string;
  }) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  /**
   * The full name of a person, e.g. "John Smith".
   */
  public full(): string {
    if (this.hasLast()) {
      return `${this.firstName} ${this.lastName}`;
    }
    return this.firstName;
  }

  /**
   * The first name plus last initial, e.g. "John S.".
   */
  public familiar(): string {
    if (this.hasLast()) {
      return `${this.firstName} ${this.lastName?.charAt(0)}.`;
    }
    return this.firstName;
  }

  /**
   * The initial of the first name plus the last name, e.g. "J. Smith".
   */
  public abbreviated(): string {
    if (this.hasLast()) {
      return `${this.firstName.charAt(0)}. ${this.lastName}`;
    }
    return this.firstName;
  }

  /**
   * Sorts the name for sorting, e.g. "Smith, John"
   */
  public sorted(): string {
    if (this.hasLast()) {
      return `${this.lastName}, ${this.firstName}`;
    }
    return this.firstName;
  }

  /**
   * Adds "'s" or "'" to the end of a full name, e.g. "John Smith's".
   */
  public possessive(): string {
    const fullName = this.full();

    if (fullName.endsWith("s")) {
      return `${fullName}'`;
    }
    return `${fullName}'s`;
  }

  /**
   * Initials provides a name's initials, e.g. "JS".
   */
  public initials(): string {
    if (this.hasLast()) {
      return `${this.firstName.charAt(0).toUpperCase()}${this.lastName
        ?.charAt(0)
        .toUpperCase()}`;
    }
    return this.firstName.charAt(0).toUpperCase();
  }

  /**
   * Check if the person has a last name.
   */
  private hasLast(): boolean {
    if (this.lastName == null) {
      return false;
    }
    return true;
  }
}
