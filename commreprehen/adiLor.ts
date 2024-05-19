class Person {
  private _occupation: string;

  constructor(occupation: string) {
    this._occupation = occupation;
  }

  set occupation(newOccupation: string) {
    if (newOccupation && newOccupation.trim() !== '') {
      this._occupation = newOccupation;
    } else {
      throw new Error('Invalid occupation value');
    }
  }

  get occupation(): string {
    return this._occupation;
  }
}

// Usage
const person = new Person('Software Developer');
console.log(person.occupation); // Output: Software Developer
person.occupation = 'Data Scientist';
console.log(person.occupation); // Output: Data Scientist
