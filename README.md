# name-of-person

Presenting names for English-language applications where a basic model of first and last name(s) combined is sufficient.

Based off of [basecamp/name_of_person](https://github.com/basecamp/name_of_person).

## Installation

```bash
yarn add name-of-person
```

## Examples

```javascript
import NameOfPerson from "name-of-person";

// The only possible error here is not providing a first name.
const name = new NameOfPerson({ firstName: "John", lastName: "Smith" });

name.full(); // John Smith
name.familiar(); // John S.
name.abbreviated(); // J. Smith
name.sorted(); // Smith, John
name.possessive(); // John Smith's
name.initials(); // JS
```

## Tests

```bash
yarn test
```

## License

[MIT](https://opensource.org/licenses/MIT)
