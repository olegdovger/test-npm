export default class Person {
  constructor(name) {
    if (name.indexOf(' ') !== -1) {
      [this.firstName, this.surName] = name.split(' ');
    } else {
      this.firstName = name;
      this.surName = '';
    }
  }

  get fullName() {
    return `${this.firstName} ${this.surName}`;
  }

  set fullName(fullName) {
    [this.firstName, this.surName] = fullName.split(' ');
  }
}